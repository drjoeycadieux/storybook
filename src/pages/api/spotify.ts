import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

async function getAccessToken() {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
        },
        params: {
            grant_type: 'client_credentials',
        },
    });

    return response.data.access_token;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const token = await getAccessToken();
        const response = await axios.get(`${SPOTIFY_API_URL}/some-endpoint`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from Spotify' });
    }
}
