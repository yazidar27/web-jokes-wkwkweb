import React from 'react'
import Button from '../buttons/Button'

const StoryForm = () => {
    return (
        <form >
            <label htmlFor="category" className="block text-sm font-semibold mb-1">What best describes your jokes?</label>
            <select id="category" name="category" className="w-full p-2 border rounded-lg mb-2">
                <option value="dark">Dark</option>
                <option value="dad">Dad Jokes</option>
                <option value="programmer">Programmer Jokes</option>
                <option value="satire">Satire</option>
                <option value="science">Science</option>
                <option value="politic">Politic</option>
            </select>
            <textarea
                className="w-full p-2 border rounded-lg"
                rows={5}
                placeholder="Tulis story jokes kamu di sini..."
            />

           <Button title="Create Jokes"/>
        </form>
    )
}

export default StoryForm