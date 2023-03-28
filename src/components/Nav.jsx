import React from 'react'

const Nav = () => {
    return (
        <nav className=' w-screen bg-blue-500 h-12 fixed  '>
            <div className='flex justify-between items-center w-[90%] m-auto h-full'>
                <div>logo</div>
                <ul className='flex'>
                    <li>about</li>
                    <li>contact</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav