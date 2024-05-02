import fs from "node:fs/promises";

export default async function setupEnv () {
  try {
    const VITE_API_HOST = process.env.VITE_API_HOST || "http://localhost:4000/api";

    await fs.writeFile(".env", `VITE_API_HOST=${VITE_API_HOST}\n`);
  } catch (error) {
    console.log("Error setting up environment variables");
    console.log(error);
  }
}

setupEnv();
