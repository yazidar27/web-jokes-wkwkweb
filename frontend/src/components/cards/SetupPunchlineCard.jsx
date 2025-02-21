import React, { useState } from 'react';


const SetupPunchlineCard = ({ setup, punchline, category, date, upvotes, downvotes }) => {
    const [reveal, setReveal] = useState(false);

    return (
        <article className="flex w-[350px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]">
            {/* Date & Category */}
            <div className="mb-2 flex items-center gap-x-2 text-xs">
                <time className="border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out transform hover:scale-110">
                    {date}
                </time>
                <span className="relative z-10 border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300">
                    {category}
                </span>
            </div>

            {/* Setup */}
            <div className="group relative">
                <p className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600">
                    {setup}
                </p>
            </div>

            {/* Hidden Punchline */}
            <div
                className={`mt-5 border-l-4 border-green-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform ${reveal ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
            >
                {reveal && <p className="font-bold">{punchline}</p>}
            </div>

            {/* Reveal Button */}
            <button
                onClick={() => setReveal(true)}
                className={`mt-4 px-4 py-2 border-2 border-black bg-yellow-400 text-black font-bold transition-all duration-500 ease-in-out transform ${reveal ? "scale-90 opacity-50 cursor-not-allowed" : "hover:scale-110"
                    }`}
                disabled={reveal}
            >
                {reveal ? "😂 Gotcha!" : "Reveal Punchline"}
            </button>
            <div className="relative mt-8 flex items-center justify-between w-full">
                <div className="flex gap-4">
                    <button

                        className="flex items-center gap-1 px-3 py-1 border-2 border-black bg-green-500 text-white font-bold transition-all duration-500 ease-in-out transform hover:scale-110"
                    >
                        👍 <span>{upvotes}</span>
                    </button>
                    <button

                        className="flex items-center gap-1 px-3 py-1 border-2 border-black bg-red-500 text-white font-bold transition-all duration-500 ease-in-out transform hover:scale-110"
                    >
                        👎 <span>{downvotes}</span>
                    </button>
                </div>
                <div className="text-sm leading-6">
                    <p className="font-black text-black transition-all duration-500 ease-in-out transform hover:scale-110">
                        <span>- Anonymous -</span>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default SetupPunchlineCard