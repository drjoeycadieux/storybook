import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

type SpotifyResponse = {
    access_token: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
        return res.status(500).json({ error: 'Spotify credentials not set' });
    }

    const auth = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

    try {
        const response = await axios.post<SpotifyResponse>(SPOTIFY_TOKEN_URL, null, {
            headers: {
                Authorization: `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                grant_type: 'client_credentials',
            },
        });

        const accessToken = response.data.access_token;

        // Fetch data from a specific Spotify API endpoint
        const spotifyDataResponse = await axios.get('https://api.spotify.com/v1/some-endpoint', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        res.status(200).json(spotifyDataResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from Spotify' });
    }
}
