import React from 'react'
import { useState } from 'react';
import Button from '../components/buttons/Button';
import FilterSwitch from '../components/buttons/FilterSwitch';
import SetupPunchlineForm from '../components/forms/SetupPunchlineForm';
import StoryForm from '../components/forms/StoryForm';
const CreateJokes = () => {

    const [jokesType, setJokesType] = useState("story");

    const handleJokesTypeChange = (selectedJokesType) => {
        setJokesType(selectedJokesType)
    }



    return (
        <div className="min-w-[60vw] mx-auto p-16">
            <h2 className="text-3xl text-center font-semibold mb-6">Buat Joke Kamu</h2>
            <FilterSwitch onJokesTypeChange={handleJokesTypeChange} />
            {
                jokesType === "story" ?  <StoryForm/> : <SetupPunchlineForm/>
            }


        </div>
    );
}



export default CreateJokes