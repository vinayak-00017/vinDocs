import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='auth-page'>
        <SignIn></SignIn>
    </main>
  )
}

export default SignUpPage