import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link'



const Home = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/hello');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const json = await res.json();
                setData(json);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <Head>
                <title>Security-Technologies - Powered By Techtack-Technologies</title>
                <meta name="description" content="This is a sample Next.js application." />
            </Head>
            <Link className='text-gray-800 font-bold underline' href="/">Return Home</Link>
            <h1 className="text-4xl font-bold mb-4">About Me,</h1>
            {error && <p className="text-red-500">{error}</p>}
            {data ? (
                <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Age:</strong> {data.age}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Occupation:</strong> {data.occupation}</p>
                    <p><strong>Location:</strong> {data.location.city}, {data.location.state}</p>
                    <p><strong>Hobbies:</strong> {data.hobbies.join(', ')}</p>
                    <p><strong>Skills:</strong> {data.skills.join(', ')}</p>
                    <p><strong>Active:</strong> {data.isActive ? 'Yes' : 'No'}</p>
                </div>
            ) : (
                <p className="text-gray-500">Loading...</p>
            )}
        </div>
    );
};

export default Home;