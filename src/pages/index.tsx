import localFont from "next/font/local";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

import HeaderNav from "@/components/HeaderNav";

export default function Home() {
    return (
        <div>
            <HeaderNav />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600">
                    Hello, Tailwind with Next.js!
                </h1>
            </div>
        </div>
    );
}

