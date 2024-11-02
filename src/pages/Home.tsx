import Head from 'next/head';
import { useEffect, useState } from 'react';

type SpotifyDataType = {
    name?: string;
    albums?: any[];
};

const SpotifyData = () => {
    const [data, setData] = useState<SpotifyDataType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/spotify');
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to fetch data from Spotify.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center text-lg">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="bg-gray-800 md:p-10">
            <Head>
                <title>Security-Technologies - Powered By Techtack-Technologies</title>
                <meta name="description" content="This is a sample Next.js application." />
            </Head>
            <h1 className="text-2xl font-bold text-white text-center text-5xl mb-4">Spotify Player</h1>
            <pre className="bg-gray-100 p-4 rounded border">{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default SpotifyData;
