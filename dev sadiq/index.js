import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import tasks from './routes/tasks.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Home is working");
});

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use tasks router
app.use('/tasks', tasks);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
