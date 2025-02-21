import React from 'react'
import Button from '../buttons/Button'

const SetupPunchlineForm = () => {
    return (
        <form>
            <label htmlFor="category" className="block text-sm font-semibold mb-1">What best describes your jokes?</label>
            <select id="category" name="category" className="w-full p-2 border rounded-lg mb-2">
                <option value="dark">Dark</option>
                <option value="dad">Dad Jokes</option>
                <option value="programmer">Programmer Jokes</option>
                <option value="satire">Satire</option>
                <option value="science">Science</option>
                <option value="politic">Politic</option>
            </select>

            <label className="block text-sm font-semibold mb-1">Setup</label>
            <input
                type="text"
                className="w-full p-2 border rounded-lg mb-2"


                placeholder="Contoh: Kenapa ayam menyebrang jalan?"
            />
            <label className="block text-sm font-semibold mb-1">Punchline</label>
            <input
                type="text"
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="Contoh: Untuk pergi ke sisi lain!"
            />
            <Button title="Buat Jokes" />
        </form>
    )
}

export default SetupPunchlineForm