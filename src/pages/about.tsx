import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link'



/**
 * Home component that fetches and displays user data from an API.
 *
 * This component utilizes React hooks to manage state and side effects.
 * It fetches data from the '/api/hello' endpoint and displays user
 * information such as name, age, email, work email, occupation, location,
 * hobbies, skills, and activity status. In case of an error during the
 * fetch, an error message is displayed. While the data is being loaded,
 * a loading message is shown.
 *
 * The component is styled using Tailwind CSS and includes a link to
 * return to the home page.
 *
 * @returns JSX.Element representing the Home component.
 */
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
                    <p><strong>Work Email:</strong> {data.work_email}</p>
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