import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dbConnect from './config/dbConnect.js';
import tutorialRoutes from './routes/tutorialRoute.js';

dotenv.config();

dbConnect();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', tutorialRoutes);  

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
