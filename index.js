import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

// Export the app for testing
export default app;