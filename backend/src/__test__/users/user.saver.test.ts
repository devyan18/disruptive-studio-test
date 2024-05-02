import request from "supertest";
import { CONFIG } from "../../settings/env-vars";
import { buildApp } from "../../application";
import { Server } from "http";
import { startConnection } from "../../database/mongodb";
import { UserModel } from "../../modules/users/entity/user-model";

import mongoose from "mongoose";
import { USER_ROLES } from "../../modules/users/entity/user";

import { FAKE_USER } from "./user-fake-data";

const app = buildApp();

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

describe("Create User", () => {
  it("should be return 201", async () => {
    const response = await request(app).post("/api/users").send({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      password: FAKE_USER.password,
      role: USER_ROLES.LECTOR
    });

    expect(response.status).toBe(201);

    const user = response.body.data;

    expect(user).toMatchObject({
      username: FAKE_USER.username,
      email: FAKE_USER.email,
      role: USER_ROLES.LECTOR
    });
  });
})