import express from 'express';
import { PORT } from './config/env.js';
import { connectToDatabase } from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js';
import authRouter from './routes/auth.routes.js';

const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("welcome to backend wkwkjokes"));

app.use(errorMiddleware);

app.use('/wkwk/v1/auth', authRouter);

app.listen(PORT, async () => {
  console.log(`wkwkjokes is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;