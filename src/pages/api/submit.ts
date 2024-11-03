import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { data } = req.body;
        // Process the data (e.g., save to a database, etc.)
        res.status(200).json({ message: `Received: ${data}` });
    } else if (req.method === 'GET') {
        const { data } = req.query;
        // Handle GET request (you can modify this as needed)
        res.status(200).json({ message: `Fetched data: ${data}` });
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
