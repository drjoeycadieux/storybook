export default function Home() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Banner Alert */}
            <div className="bg-yellow-500 text-black text-center py-2 z-20 absolute top-0 left-0 w-full">
                <p className="font-medium">
                    🚨 Important Update: Our website has a new look! Check it out!
                </p>
            </div>

            {/* Video Container */}
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

            {/* Overlay Content */}
            <div className="relative flex flex-col items-center justify-center h-full z-10">
                <h1 className="text-6xl font-bold text-white transition-transform duration-300 hover:scale-110 hover:text-orange-500">
                    Security-Technologies
                </h1>

                {/* Button */}
                <button className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none">
                    See Docs
                </button>
            </div>
        </div>
    );
}
