import SuggestButton from '@/components/SuggestButton'
import React from 'react'

export default function notfound() {
    return (
        <div className='h-screen flex justify-center items-center flex-col gap-4'>
            {/* 🚧 The page you are looking for either does not exist or has not been created yet. Please report or contribute (contact me) and we will build the website together! 🌐 */}
            <h1 className="text-4xl font-bold text-center">🚧 Contribution Required 🚧</h1>
            <p className="text-center">The page you are looking for either does not exist or has not been created yet. Please report or contribute (contact me) and <span className=' font-bold text-fuchsia-500'>we will build the website together</span> ! 🌐</p>
            <SuggestButton />
        </div>
    )
}
