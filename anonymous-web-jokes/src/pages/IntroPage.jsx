import React from 'react';
import TypeWriter from '../components/TypeWriter';
import Button from '../components/buttons/Button';

const IntroPage = () => {
    return (
        <div className='flex flex-col min-h-[50vh] justify-center items-center'>

            <TypeWriter
                className="text-gray-800 text-center font-semibold text-4xl p-4 font-display tracking-wide mb-5"
                text="Write your best jokes and make people laugh."
            />
            <p className="text-center text-lg text-gray-700">
                Everyone has a sense of humor
            </p>

            <div className='flex flex-row gap-4 mt-4'>
                <Button title="Start Writing Jokes" />
                <Button title="Explore Jokes" />
            </div>
        </div>
    )
}

export default IntroPage;
