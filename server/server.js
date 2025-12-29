import express from 'express';
import 'dotenv/config';

// Local imports
import userRouter from './routes/user.route.js';
import { errorHandler } from './libs/middleware.js';

const app = express();
const PORT = 8000;

// JSON middleware to send values in request body to parse incoming JSON data
app.use(express.json());

app.use('/api/v1/users', userRouter);

app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
