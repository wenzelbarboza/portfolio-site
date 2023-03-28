import React from 'react'

const Home = () => {
    return (
        <section className='w-full pt-12'>
            <article className=' w-[90%] m-auto flex'>
                <div className=' flex-grow-[1] bg-blue-100'>image</div>
                <div className=' flex-grow-[3] bg-blue-500'>
                    <h1>name</h1>
                    <p>description</p>
                </div>
            </article>
        </section>
    )
}

export default Home