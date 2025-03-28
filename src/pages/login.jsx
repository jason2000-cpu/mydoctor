import React from 'react';
import LoginForm from '../components/forms/LoginForm'

function LoginPage () {

    return (
        <div className='flex flex-col items-center  mt-28 space-y-4 h-[100vh]'>
            <div className='flex flex-col items-center'>
                <img src='/assets/images/MyDoctor_logo.PNG'  className='size-20' alt='MY DOCTOR' />
                <span className='text-2xl font-bold'>Welcome To My Doctor</span>
                <span>Login To Continue</span>
            </div>
            <LoginForm />
        </div>
    )
}


export default LoginPage;