import React, { useState } from 'react'
import { Inputs } from '../../ReusableComponent/Inputs'
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useNavigate } from 'react-router-dom'
import { smeSectors } from '@/Constant'

export const PersonalInfo = () => {
    const navigate = useNavigate()
    const [Value, setValue] = useState({
        firstName: '',
        email: '',
        password: '',
        phone: '',
        company: '',
        address: '',
    })
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setValue({
            ...Value,
            [name]: value,
        })
    }
    console.log(Value.firstName)
    return (
        <div className='w-screen bg-blue-100 bg-opacity-[0.3]  flex i  h-screen '>
            <div className='w-[50%] h-full'>
                <img src="/src/assets/pexels-n-voitkevich-6120220.jpg" loading='lazy' alt="signup_logo" className='object-cover w-full h-full' />
            </div>
            <div className='w-[50%] flex  h-full flex-col justify-center pt-10 gap-10'>
                {/* <div className='font-bold text-[2rem] text-center'></div> */}
                <div className='w-[80%] mx-auto  flex flex-col gap-1 '>
                    <div>
                        <div className='flex w-full justify-between items-center'>
                            <div className='font-bold text-[1.1rem] mb-1'>Personal Information</div>
                            <div className=' text-[1rem] mb-2 cursor-pointer bg-black text-white px-8 py-1 rounded-[5px] ' onClick={() => navigate('/signin')}>Sign In</div>
                        </div>
                        {/* <div className='w-full h-[1.5px] bg-black mb-2'></div> */}
                        <form className='flex flex-col'>
                            <Inputs type='text' className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-3 border-black bg-transparent   border-2 h-[7vh]  p-3' value={Value.password} name='email' onChange={handleChange} placeholder='email' />
                            <Inputs type='text' className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-4 border-black bg-transparent   border-2 h-[7vh]  p-3' value={Value.email} name='password' onChange={handleChange} placeholder='password' />
                        </form>
                    </div>
                    <div className='w-full'>
                        <div className='font-bold text-[1.1rem] mb-1 mt-4'>Business Information</div>
                        <Inputs type='text' className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-2 border-black bg-transparent   border-2 h-[7vh]  p-3' value={Value.company} name='company' onChange={handleChange} placeholder='business name' />
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="business type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        smeSectors.map((smeSector) => (
                                            <SelectItem value={smeSector}>{smeSector}</SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* <div className='w-full h-[1.5px] bg-black mb-2'></div> */}
                        <Inputs type='text' className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-3 border-black bg-transparent   border-2 h-[7vh]  p-3' value={Value.address} name='address' onChange={handleChange} placeholder='address' />
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="business size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                    <SelectItem value="apple">1-10</SelectItem>
                                    <SelectItem value="banana">11-20</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button className='w-full mt-4 h-12 text-[1.11rem]' onClick={() => navigate('/overview')}>Create Account</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

