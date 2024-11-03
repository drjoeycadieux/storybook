import { useState } from 'react';

const MyGetForm = () => {
    const [inputData, setInputData] = useState<string>('');
    const [responseData, setResponseData] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch(`/api/submit?data=${encodeURIComponent(inputData)}`);
        const result = await response.json();
        setResponseData(result.message);
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter search term"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Fetch Data
                </button>
            </form>
            {responseData && <p className="text-green-500 mt-4">{responseData}</p>}
        </div>
    );
};

export default MyGetForm;
