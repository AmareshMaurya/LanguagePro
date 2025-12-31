import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';
import path from "path";

const app = express();
const port = process.env.PORT || 5000;
const _dirname = path.resolve();

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

// Routes
app.use("/api/auth", userRouter);
app.use("/api/results", resultRouter);

// app.get('/', (req, res) => {
//     res.send('API Working');
// });

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.use((req, res) => {
  res.sendFile(
    path.resolve(_dirname, "frontend", "dist", "index.html")
  );
});



app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
