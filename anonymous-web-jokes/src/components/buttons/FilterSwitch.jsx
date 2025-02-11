import { useState } from "react";

export default function FilterSwitch({ onJokesTypeChange }) {
    const [selected, setSelected] = useState("story");

    return (
        <div className="relative flex items-center w-[300px] h-[50px] border-2 border-pink-400 rounded-lg overflow-hidden mb-5">
            <input
                type="radio"
                id="story"
                name="formatjoke"
                value="story"
                className="hidden"
                checked={selected === "story"}
                onChange={() => {
                    setSelected("story");
                    onJokesTypeChange("story")
                }}
            />
            <input
                type="radio"
                id="setupPunchline"
                name="formatjoke"
                value="setupPunchline"
                className="hidden"
                checked={selected === "setupPunchline"}
                onChange={() => {
                    setSelected("setupPunchline");
                    onJokesTypeChange("setupPunchline")
                }}
            />

            {/* Background Slider */}
            <span
                className={`absolute top-[4px] left-[4px] h-[38px] w-[49%] bg-pink-400 rounded-lg transition-all duration-300 ${selected === "setupPunchline" ? "left-[50%]" : "left-[4px]"
                    }`}
            ></span>

            {/* Labels */}
            <label
                htmlFor="story"
                className={`flex-1 text-center cursor-pointer text-[12px] font-medium z-10 transition-all ${selected === "story" ? "text-gray-900 font-bold" : "text-gray-500"
                    }`}
            >
                Story
            </label>
            <label
                htmlFor="setupPunchline"
                className={`flex-1 text-center cursor-pointer text-[12px] font-medium z-10 transition-all ${selected === "setupPunchline" ? "text-gray-900 font-bold" : "text-gray-500"
                    }`}
            >
                Setup + Punchline
            </label>
        </div>
    );
}
