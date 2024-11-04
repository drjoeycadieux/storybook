import type { Metadata } from 'next'
import Head from 'next/head';
import Link from 'next/link';



export const metadata: Metadata = {
    title: 'Security-Technologies',
    description: 'Powered By Techtack-Technologies',
}


// components
import Banner from '@/components/Banner';



export default function Home() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Head>
                <title>Security-Technologies - Powered By Techtack-Technologies</title>
            </Head>
            <Banner />

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-full"
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


            <div className="relative flex flex-col items-center justify-center h-full z-10">
                <h1 className="text-6xl font-bold text-white transition-transform duration-300 hover:scale-110 hover:text-white">
                    Security-Technologies
                </h1>

                <br />
                <Link href="/about" passHref>
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                        See Information
                    </button>
                </Link>
            </div>
        </div>
    );
}
