import { CONFIG } from "./settings/env-vars";
import { buildApp } from "./application";
import { startConnection } from "./database/mongodb";

// Main function
async function main () {
  // Start connection to the database

  await startConnection(CONFIG.MONGODB_URI);

  // Start the application
  const app = buildApp();

  // Listen to the port
  app.listen(CONFIG.PORT, () => {
    console.log(`[APP] - Server is running on port: ${CONFIG.PORT}`);
  });
}

main();
