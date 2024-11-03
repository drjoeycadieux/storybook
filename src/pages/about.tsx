import Head from 'next/head';
import { GetServerSideProps } from 'next';

interface HomeProps {
    message: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const res = await fetch('http://localhost:3000/api/hello'); // Change URL in production
    const data = await res.json();

    return {
        props: {
            message: data.message,
        },
    };
};

export default function About() {
    return (
        <div>
            <div className="bg-gray-800 md:p-10">
                <Head>
                    <title>Security-Technologies - Powered By Techtack-Technologies</title>
                    <meta name="description" content="This is a sample Next.js application." />
                </Head>
                <p className="text-white font-sans text-center text-5xl">
                    About
                </p>
                {/* <p>{ }</p> code goes here  */}
            </div>
        </div>
    )
}