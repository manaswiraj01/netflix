import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header />
        <div className='absolute brightness-50'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='background-image'/>
        </div>
        <form className='absolute w-3/12 bg-black text-white mx-auto p-12 my-36 right-0 left-0 rounded-sm bg-opacity-80'>
            <h1 className='font-bold text-3xl my-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
                <input type='text' placeholder='Full Name' className='bg-gray-50 p-2 my-2 w-full rounded-md bg-opacity-10 h-14' />
                )
            }
            <input type='text' placeholder='Email or mobile number' className='bg-gray-50 p-2 my-2 w-full rounded-md bg-opacity-10 h-14' />
            <input type='text' placeholder='Password' className='p-2 my-2 w-full rounded-md bg-gray-50 bg-opacity-10 h-14'/>
            <button className='bg-red-700 p-2 my-2 w-full rounded-md h-14'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='cursor-pointer my-2' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?  Sign up now." : "Already registered? Sign in now." }</p>
        </form>
    </div>
  )
}

export default Login