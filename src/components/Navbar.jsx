import React from 'react'

export default function Navbar() {
    return (
        <nav className="bg-white w-full mb-2">
            <div className="flex h-16">
                <div className="flex justify-start items-center">
                    <img src="logo.png" alt="Logo" className="h-16 mt-2 ml-2" />
                </div>
                <div className="hidden md:flex space-x-8 mx-auto items-center text-lg">
                    <a href="" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Home</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Shop</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">About Us</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Contact Us</a>
                </div>
                <div className="flex ml-auto mt-2 justify-end md:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <a href="" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Home</a>
                            <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Shop</a>
                            <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">About Us</a>
                            <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Contact Us</a>
                        </ul>
                    </div>
                </div>

                <div className="hidden lg:flex justify-end items-center ml-auto mr-2">
                    <label className="input input-bordered border-2 border-black flex items-center gap-2 text-black">
                        <input type="text" className="grow placeholder:text-black" placeholder="Search for products" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
            </div>
            <div className="m-3 lg:hidden">
                <label className="input input-bordered border-2 border-black flex items-center gap-2 text-black">
                    <input type="text" className="grow placeholder:text-black" placeholder="Search for products" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
        </nav>
    )
}
