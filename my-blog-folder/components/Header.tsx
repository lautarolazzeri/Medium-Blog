import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between p-5 max-w-7xl mx-auto'>
            <div className='flex items-center space-x-5'>
                <Link href='/'>
                    <h1 className='text-3xl text-green-600 font-semibold mr-5 pt-0'>My Blog</h1>
                </Link>
                <div className='hidden md:inline-flex items-center space-x-5 cursor-pointer'>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
                </div>
            </div>
            <div className='items-center space-x-5 text-green-600 hidden sm:inline-flex cursor-pointer'>
                <h3>Sign In</h3>
                <h3 className='border px-4 py-1 rounded-full border-green-600 hover:bg-green-600 hover:text-gray-800'>Get Started</h3>
            </div>
        </header>
    )
}

export default Header
