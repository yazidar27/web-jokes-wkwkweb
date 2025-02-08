import React from 'react'

const Button = ({ onClick, title, ...props }) => {
    return (
        <button
            className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            {...props}
        >
            {title}
        </button>
    )
}

export default Button