import express from 'express';
import 'dotenv/config';

// Local imports
import { db } from './libs/dbConnect.js';
import userRouter from './routes/user.route.js';

const app = express();
const PORT = 8000;

// JSON middleware to send values in request body to parse incoming JSON data
app.use(express.json());

app.use('/api/v1/users', userRouter);

// Index route
app.use('/', (req, res) => {
    res.status(200).json({ message: 'Hello home page' });
});

// Catch-all 404 handler (use a pathless middleware to avoid path parsing errors)
// app.use('*', (req, res) => {
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
