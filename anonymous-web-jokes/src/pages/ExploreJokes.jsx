import React from 'react'
import allJokes from "../data/dummy.json";
import StoryCard from '../components/cards/StoryCard';
import SetupPunchlineCard from '../components/cards/SetupPunchlineCard';

const ExploreJokes = () => {


    const cardJokes = allJokes.jokes.map((joke) => {
        return joke.type === "setupPunchline"
            ? <SetupPunchlineCard
                key={joke.id}
                category={joke.category}
                date={joke.createdAt}
                setup={joke.setup}
                punchline={joke.punchline}
                downvotes={joke.downvotes}
                upvotes={joke.upvotes}
            />
            : <StoryCard
                key={joke.id}
                category={joke.category}
                date={joke.createdAt}
                downvotes={joke.downvotes}
                upvotes={joke.upvotes}
                story={joke.story}
            />;
    });


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-auto mt-10">
            {cardJokes}
        </div>
    )
}

export default ExploreJokes