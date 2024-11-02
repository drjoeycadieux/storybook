import { useEffect, useState } from 'react';

type SpotifyDataType = {
    name?: string;
    albums?: any[];
};

const SpotifyData = () => {
    const [data, setData] = useState<SpotifyDataType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/spotify');
            const json = await res.json();
            setData(json);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center text-lg">Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Spotify Data</h1>
            <pre className="bg-gray-100 p-4 rounded border">{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default SpotifyData;
