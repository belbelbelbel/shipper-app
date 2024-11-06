import React from 'react'
import "../Component/Styles.css"
import { useNavigate } from 'react-router-dom'
export const Hero = () => {
    const navigate  = useNavigate()
    return (
        <div className=' h-screen w-screen'>

            <div className='hero-img w-[100%]  flex flex-col gap-40 h-[100%]'>
                <div className='w-full mx-auto h-[20%] justify-center flex flex-col bg-transparent '>
                    <div className='w-[80%] mx-auto flex items-center relative z-50 justify-between'>
                        <div className='text-[2.7rem]  text-white hero-logo tracking-[3px] text-opacity-[1]'>Shi-Go</div>
                        <div className='flex gap-10 text-black text-xl'>
                            <button className='bg-white px-10 py-1.5 shadow-2xl rounded-[10px] hover:text-black  hover:bg-white hover:bg-opacity-[0.9] font-bold' onClick={() => navigate('/signup')}>Sign Up</button>
                            <button className='bg-white px-10 py-1.5 shadow-2xl rounded-[10px] hover:text-black hover:bg-white hover:bg-opacity-[0.9] font-bold' onClick={() => navigate('/signin')}>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className=' w-[80%] mx-auto '>
                    <div className='text-[2.5rem]  tracking-[0.5px] text-white relative z-50 hero-text'>
                    A web-based platform for connecting MSMEs with optimal suppliers and managing inventory needs using machine learning predicting and recommendation models
                    </div>
                </div>
            </div>
        </div>
    )
}
