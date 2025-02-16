import express from 'express';
import { PORT } from './config/env.js';
import { connectToDatabase } from './database/mongodb.js';

const app = express();


app.get("/", (req, res) => res.send("welcome to backend wkwkjokes"));

app.listen(PORT, async () => {
  console.log(`wkwkjokes is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;