import React, { useState } from 'react'
import { Inputs } from '../ReusableComponent/Inputs'
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

export const PersonalInfo = () => {
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
        <div className='w-screen  flex i  h-screen bg-[rgb(230,230,230)]'>
            <div className='w-[50%] h-full'>
                <img src="/src/assets/pexels-n-voitkevich-6120220.jpg" loading='lazy' alt="signup_logo" className='object-cover w-full h-full' />
            </div>
            <div className='w-[50%] flex flex-col mt-10 gap-10'>
                <div className='font-bold text-[2rem] text-center'>Create Account</div>
                <div className='w-[80%] mx-auto  flex flex-col gap-2 '>
                    <div>
                        <div className='font-bold text-[1.1rem] mb-2'>Personal Information</div>
                        {/* <div className='w-full h-[1.5px] bg-black mb-2'></div> */}
                        <form className='flex flex-col'>
                            <Inputs type='text' className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-3 border-black bg-transparent   border-2 h-[7vh]  p-3' value={Value.password} name='email' onChange={handleChange} placeholder='email' />
                            <Inputs type='text' className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-4 border-black bg-transparent   border-2 h-[7vh]  p-3' value={Value.email} name='firstname' onChange={handleChange} placeholder='password' />
                        </form>
                    </div>
                    <div className='w-full'>
                        <div className='font-bold text-[1.1rem] mb-2 mt-4'>Business Information</div>
                        <Inputs type='text' className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-2 border-black bg-transparent   border-2 h-[7vh]  p-3' value={Value.password} name='BusinessName' onChange={handleChange} placeholder='business name' />
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="business type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {/* <SelectLabel>F</SelectLabel> */}
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* <div className='w-full h-[1.5px] bg-black mb-2'></div> */}
                        <Inputs type='text' className='text-black outline-0 w-[100%]  mx-auto rounded-[7px]  mt-3 border-black bg-transparent   border-2 h-[7vh]  p-3' value={Value.password} name='BusinessName' onChange={handleChange} placeholder='address' />
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
                        <Button className='w-full mt-4 h-12 text-[1.11rem]'>Create Account</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

