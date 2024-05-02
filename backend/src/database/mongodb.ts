import { connect } from "mongoose";

export const startConnection = async (URI: string): Promise<void> => {
  try {
    const db = await connect(URI);
    console.log(`[DB] - Connection established to: "${db.connection.name}"`);
  } catch (error) {
    console.error(error);
    console.error("[DB] - Error connecting to the database");
    process.exit(1);
  }
};
