import React from 'react';
import LoginForm from '../components/forms/LoginForm'

function LoginPage () {

    return (
        <div className='space-y-4'>
            <div className='flex flex-col items-center space-y-12 mt-16'>
                <div className='flex flex-col items-center'>
                    <img src='/assets/images/MyDoctor_logo.PNG'  className='size-20' alt='MY DOCTOR' />
                    <span className='text-2xl font-bold tracking-[9px]' >MY DOCTOR</span>
                    <span  className='tracking-widest font-light'>~ A LEGACY OF CARE</span>
                </div>
                <div>
                    <span className='text-lg '>Login To Continue</span>
                </div>
            </div>
            <LoginForm />
        </div>
    )
}


export default LoginPage;