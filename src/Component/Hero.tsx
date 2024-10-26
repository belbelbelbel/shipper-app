import React from 'react'
import "../Component/Styles.css"
export const Hero = () => {
    return (
        <div className=' h-screen w-screen'>

            <div className='hero-img w-[100%]  flex flex-col gap-40 h-[100%]'>
                <div className='w-full mx-auto h-[20%] justify-center flex flex-col bg-transparent '>
                    <div className='w-[80%] mx-auto flex items-center relative z-50 justify-between'>
                        <div className='text-[2.7rem]  text-white hero-logo tracking-[3px] text-opacity-[1]'>Logo</div>
                        <div className='flex gap-20 text-white'>
                            <button className='bg-black px-10 py-1.5 shadow-xl rounded-[10px] '>Sign Up</button>
                            <button className='bg-black px-10 py-1.5 shadow-xl rounded-[10px]'>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className=' w-[80%] mx-auto '>
                    <div className='text-[2.5rem]  tracking-[0px] text-white relative z-50 hero-text'>
                        We connect MSMEs with suppliers, distributors, and logistics providers in real-time, using AI to recommend suppliers, predict inventory needs, and optimize delivery schedules
                    </div>
                </div>
            </div>
        </div>
    )
}
