import React from 'react';
import Button from '../buttons/Button';

const AuthForm = ({ type }) => {
    return (
        <form>
            {type === 'register' && (
                <>
                    <label className="block text-sm font-semibold mb-1">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded-lg mb-2"
                        placeholder="Enter your username"
                    />
                </>
            )}

            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
                type="email"
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="Enter your email"
            />

            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
                type="password"
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="Enter your password"
            />

            <Button title={type === 'register' ? 'Register' : 'Login'} />
        </form>
    );
};

export default AuthForm;
