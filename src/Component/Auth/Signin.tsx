import { Inputs } from '@/ReusableComponent/Inputs'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Signin = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        email: '',
        password: '',
    })

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
    }

    return (
        <div className='w-screen h-screen flex'>
            <div className='w-[50%] h-full'>
                <img src="/src/assets/pexels-n-voitkevich-6120220.jpg" loading='lazy' alt="signup_logo" className='object-cover w-full h-full' />
            </div>

            <div className='w-[50%] bg-blue-100 bg-opacity-[0.3] mx-auto'>
                <form className='w-[80%] h-full mx-auto  flex-col justify-center flex '>
                    <div className='font-bold text-[2rem] text-center m-4'>Sign In</div>
                    <Inputs value={details.email} type='text' placeholder='email' name='email' onChange={handlechange} className='text-black outline-0 w-[100%]  mx-auto rounded-[7px] mb-4  mt-3 border-black bg-transparent   border-2 h-[7vh]  p-3' />
                    <Inputs value={details.password} type='text' placeholder='password' name='password' onChange={handlechange} className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-3 border-black bg-transparent   border-2 h-[7vh]  p-3' />
                    <Button className='w-full mt-4 h-12 text-[1.11rem]'>Login</Button>
                    <div className='font-bold text-[1rem] text-right m-2 cursor-pointer' onClick={() => navigate('/signup/PI')}>Create Account</div>
                </form>
            </div>

        </div>
    )
}
