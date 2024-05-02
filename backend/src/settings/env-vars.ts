import "dotenv/config";

// Define the environment variables that the application will use
export const CONFIG = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 4000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/test",
  MONGODB_URI_TEST: process.env.MONGODB_URI_TEST || "mongodb://localhost:27017/test"
};
