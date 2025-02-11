import React from 'react'
import Button from '../buttons/Button'

const StoryForm = () => {
    return (
        <form >
            <textarea
                className="w-full p-2 border rounded-lg"
                rows={3}
                placeholder="Tulis story jokes kamu di sini..."
            />

           <Button title="Create Jokes"/>
        </form>
    )
}

export default StoryForm