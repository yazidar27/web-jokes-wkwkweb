import React from 'react'

const StoryCard = ({ story, category, date, upvotes, downvotes }) => {
    return (
        <article className="flex w-[350px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]">

            <div className="mb-2 flex items-center gap-x-2 text-xs">
                <time className="border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out transform hover:scale-110">
                    {date}
                </time>
                <span className="relative z-10 border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300">
                    {category}
                </span>
            </div>

            <div className="group relative">
                <p className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600">
                    {story}
                </p>
            </div>

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
    )
}

export default StoryCard