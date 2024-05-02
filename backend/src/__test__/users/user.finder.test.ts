import { CONFIG } from "../../settings/env-vars";
import request from "supertest";
import { buildApp } from "../../application";
import { Server } from "http";
import { startConnection } from "../../database/mongodb";
import { UserModel } from "../../modules/users/entity/user-model";

import { FAKE_USER } from "./user-fake-data";

import mongoose from "mongoose";
import { USER_ROLES } from "../../modules/users/entity/user";

const app = buildApp();

const PATH = "/api/users";

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
})

afterEach(async () => {
  await UserModel.deleteMany({});
})

describe("Get all users", () => {
  it("should be return array", async () => {
    const response = await request(app).get(`${PATH}`);
    expect(response.body.data).toEqual([]);
  });

  it("should be return array with one user", async () => {
    const response = await request(app).post(`${PATH}`).send({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      password: FAKE_USER.password,
      role: USER_ROLES.Lector
    });
    expect(response.status).toBe(201);
    const responseGet = await request(app).get(`${PATH}`);
    expect(responseGet.body.data.length).toBe(1);

    const user = responseGet.body.data[0];
    expect(user).toMatchObject({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      role: USER_ROLES.Lector
    })
  });
});

describe("Get user by id", () => {
  it("should be return 404 if user not found", async () => {
    const newMongoId = new mongoose.Types.ObjectId();
    const response = await request(app).get(`${PATH}/${newMongoId}`);
    expect(response.status).toBe(404);
  });

  it("should be return user", async () => {
    const response = await request(app).post(`${PATH}`).send({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      password: FAKE_USER.password,
      role: USER_ROLES.Lector
    })
    
    const user = response.body.data;
    const responseGet = await request(app).get(`${PATH}/${user.id}`);
    
    expect(responseGet.status).toBe(200);

    expect(responseGet.body.data).toMatchObject({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      role: USER_ROLES.Lector
    });
  });
})


describe("Get user by email", () => {
  it("should be return 404 if user not found", async () => {
    const response = await request(app).get(`${PATH}/email?email=${FAKE_USER.email}`);
    expect(response.status).toBe(404);
  })

  it("should be return user", async () => {
    await request(app).post(`${PATH}`).send({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      password: FAKE_USER.password,
      role: USER_ROLES.Lector
    });

    const responseGet = await request(app).get(`${PATH}/email?email=${FAKE_USER.email}`);

    expect(responseGet.status).toBe(200);

    expect(responseGet.body.data).toMatchObject({
      email: FAKE_USER.email,
    });

  })
})
