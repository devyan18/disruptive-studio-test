import request from "supertest";
import { buildApp } from "../application";

describe("Health check", () => {
  it("should return 200", async () => {
    const app = buildApp();
    const response = await request(app).get("/api/health");
    expect(response.status).toBe(200);
  });
});