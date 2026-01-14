import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

// Local imports
import userRouter from './routes/user.route.js';
import { errorHandler } from './libs/middleware.js';
import authRouter from './routes/auth.route.js';

const app = express();
const PORT = 8000;

// JSON middleware to send values in request body to parse incoming JSON data
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/users', userRouter);

app.use('/api/v1/auth', authRouter);

app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
