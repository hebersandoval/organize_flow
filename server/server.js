import express from 'express';

const app = express();
const PORT = 8000;

// Catch-all 404 handler (use a pathless middleware to avoid path parsing errors)
// app.use('*', (req, res) => {
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
