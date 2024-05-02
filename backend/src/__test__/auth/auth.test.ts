import { CONFIG } from "../../settings/env-vars";
import request from "supertest";
import { buildApp } from "../../application";
import { Server } from "http";
import { startConnection } from "../../database/mongodb";
import { UserModel } from "../../modules/users/entity/user-model";

import { FAKE_USER } from "../user-fake-data";

import mongoose from "mongoose";
import { Role, USER_ROLES } from "../../modules/users/entity/user";

import { userRepository } from "../../modules/users/dependencies";

const app = buildApp();

const PATH = "/api/auth";

let server: Server;

beforeAll(done => {
  startConnection(CONFIG.MONGODB_URI_TEST).then(async () => {
    server = app.listen(CONFIG.PORT, done);
  });
});

afterAll(done => {
  mongoose.connection.close().then(() => {
    server.close(done);
  });
});

beforeEach(async () => {
  await UserModel.deleteMany({});
});

afterEach(async () => {
  await UserModel.deleteMany({});
});

describe("Register a new user", () => {
  it("should be return user", async () => {
    const response = await request(app)
      .post(`${PATH}/register`)
      .send({
        username: FAKE_USER.username,
        email: FAKE_USER.email,
        password: FAKE_USER.password,
        role: USER_ROLES.Reader as Role
      });

    expect(response.body.data).toMatchObject({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      role: USER_ROLES.Reader as Role
    });

    expect(response.status).toBe(201);

    expect(response.body.token).toBeDefined();
  });

  it("should be return error when user already exists", async () => {
    await userRepository.save({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      password: FAKE_USER.password,
      role: USER_ROLES.Reader as Role
    });

    const response = await request(app)
      .post(`${PATH}/register`)
      .send({
        username: FAKE_USER.username,
        email: FAKE_USER.email,
        password: FAKE_USER.password,
        role: USER_ROLES.Reader as Role
      });

    expect(response.status).toBe(400);
  });
});

describe("Login user", () => {
  it("should be return user", async () => {
    await userRepository.save({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      password: FAKE_USER.password,
      role: USER_ROLES.Reader as Role
    });

    const response = await request(app)
      .post(`${PATH}/login`)
      .send({
        email: FAKE_USER.email,
        password: FAKE_USER.password
      });

    expect(response.body.data).toMatchObject({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      role: USER_ROLES.Reader as Role
    });

    expect(response.status).toBe(200);

    expect(response.body.token).toBeDefined();
  });

  it("should be return error when user not exists", async () => {
    const response = await request(app)
      .post(`${PATH}/login`)
      .send({
        email: FAKE_USER.email,
        password: FAKE_USER.password
      });

    expect(response.status).toBe(404);
  });

  it("should be return error when password is incorrect", async () => {
    await userRepository.save({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      password: FAKE_USER.password,
      role: USER_ROLES.Reader as Role
    });

    const response = await request(app)
      .post(`${PATH}/login`)
      .send({
        email: FAKE_USER.email,
        password: "123456"
      });

    expect(response.status).toBe(404);
  });
});
