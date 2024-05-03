import { CONFIG } from "./settings/env-vars";
import { buildApp } from "./application";
import { startConnection } from "./database/mongodb";
import { loadSeed } from "./modules/seed/seed";

// Main function
async function main () {
  // Start connection to the database

  await startConnection(CONFIG.MONGODB_URI);

  // Start the application
  const app = buildApp();

  // Listen to the port
  app.listen(CONFIG.PORT, async () => {
    // Load seed data
    await loadSeed();

    // Log that the server is running
    console.log(`[APP] - Server is running on port: ${CONFIG.PORT}`);
  });
}

main();
