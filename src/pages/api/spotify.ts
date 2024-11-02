// pages/api/spotify.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Simulating fetching data from the Spotify API
        const response = await fetch('https://api.spotify.com/v1/some-endpoint', {
            headers: {
                Authorization: `Bearer ${process.env.SPOTIFY_API_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`API response error: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching Spotify data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
