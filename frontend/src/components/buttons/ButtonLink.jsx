import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({ onClick, title, to, ...props }) => {
    return (
        <Link
            className="text-white bg-pink-500 hover:bg-pink-600
            focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium
            rounded-lg text-sm px-4 py-2 text-center w-full"
            to={to}
            {...props}
        >
            {title}
        </Link>
    )
}

export default ButtonLink