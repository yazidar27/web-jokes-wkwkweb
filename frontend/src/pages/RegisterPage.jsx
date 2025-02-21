import React from 'react'
import AuthForm from '../components/forms/AuthForm'
const RegisterPage = () => {
    return (
        <div className='flex flex-col m-auto p-6'>
            <h2 className='text-xl text-pink-500'>Create account and write jokes</h2>
            <AuthForm type="register"/>
        </div>
    )
}

export default RegisterPage