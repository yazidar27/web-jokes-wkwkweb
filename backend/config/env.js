import { config } from "dotenv";

config({ path: ".env.development.local" });

export const { PORT, NODE_ENV, DB_URI } = process.env;