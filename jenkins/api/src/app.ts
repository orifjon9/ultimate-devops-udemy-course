/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';

export const app = express();
const port = 3000;

app.get('/api/health', (req: any, res: any) => {
    res.status(200).json({ status: 'UP' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});