import "dotenv/config";
import env from "env-var";

// Define the environment variables that the application will use
export const CONFIG = {
  PORT: env.get("PORT").default("4000").asPortNumber(),
  MONGODB_URI: env.get("MONGODB_URI").required().asString(),
  MONGODB_URI_TEST: env.get("MONGODB_URI_TEST").required().asString(),
  SECRET_OR_KEY: env.get("SECRET_OR_KEY").required().asString(),
  ADMIN_EMAIL: env.get("ADMIN_EMAIL").required().asEmailString(),
  ADMIN_USERNAME: env.get("ADMIN_USERNAME").default("admin").asString(),
  ADMIN_PASSWORD: env.get("ADMIN_PASSWORD").required().asString()
};
