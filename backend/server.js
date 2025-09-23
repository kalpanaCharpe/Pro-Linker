import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/post.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

const allowedOrigins = [
    'http://localhost:3000',  
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('❌ Blocked CORS origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.options('*', cors());

app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static('uploads'));

const start = async () => {
  const connectDB = await mongoose.connect("mongodb+srv://kcharpe123:kalpana@cluster0.g0uz3vu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log("✅ Connected to MongoDB");

  app.listen(9090, () => {
    console.log("🚀 Server is running on port 9090");
  });
};

start();
