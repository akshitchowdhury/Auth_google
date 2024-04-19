import Image from 'next/image'
import React from 'react'

const SignInBtn = () => {
  return (
    <div
    className='flex items-center
    gap-4 shadow-xl rounded-lg pl-3'>
    
    <Image 
    
    src='/gLogo.png'
        height={30} width={30}
    /> 
    <span className='bg-blue-500 px-4 py-3
    text-white '>
      <button>Sign In With Google</button>
      </span>
    </div>
  )
}

export default SignInBtn
