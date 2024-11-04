import React, { useState } from 'react';
import { Inputs } from '../../ReusableComponent/Inputs';
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';
import { smeSectors } from '@/Constant';
import toast, { Toaster } from 'react-hot-toast';
import { Value } from '@radix-ui/react-select';

export const PersonalInfo = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        firstname: '',
        email: '',
        password: '',
        company: '',
        address: '',
    });

    // Helper to check if all fields are filled
    const isFormComplete = Object.values(value).every((val) => val.trim() !== "");
    localStorage.setItem('profilename',value.firstname)
    const handleNext = () => {
        if (!isFormComplete) {
            toast.error('Please fill in every field');
        } else {
            navigate('/overview');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    return (
        <div className='w-screen bg-blue-100 bg-opacity-[0.3] flex h-screen'>
            <Toaster />
            <div className='w-[50%] h-full bg-black'>
                <img src="/src/assets/pexels-n-voitkevich-6120220.jpg" loading='lazy' alt="signup_logo" className='object-cover w-full h-full' />
            </div>
            <div className='w-[50%] flex h-full flex-col justify-center pt-10 gap-10'>
                <div className='w-[80%] mx-auto flex flex-col gap-1'>
                    <div>
                        <div className='flex w-full justify-between items-center'>
                            <div className='font-bold text-[1.1rem] mb-1'>Personal Information</div>
                            <div className='text-[1rem] mb-2 cursor-pointer bg-black text-white px-8 py-1 rounded-[5px]' onClick={() => navigate('/signin')}>Sign In</div>
                        </div>
                        <form className='flex flex-col'>
                            <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.email} name='email' onChange={handleChange} placeholder='email' />
                            <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.firstname} name='firstname' onChange={handleChange} placeholder='name' />
                            <Inputs type='password' className='text-black outline-0 w-full rounded-[7px] mt-4 border-black bg-transparent border-2 h-[7vh] p-3' value={value.password} name='password' onChange={handleChange} placeholder='password' />
                        </form>
                    </div>
                    <div className='w-full'>
                        <div className='font-bold text-[1.1rem] mb-1 mt-4'>Business Information</div>
                        <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-2 border-black bg-transparent border-2 h-[7vh] p-3' value={value.company} name='company' onChange={handleChange} placeholder='business name' />
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="business type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {smeSectors.map((smeSector, index) => (
                                        <SelectItem key={index} value={smeSector}>{smeSector}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.address} name='address' onChange={handleChange} placeholder='address' />
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="business size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="1-10">1-10</SelectItem>
                                    <SelectItem value="11-20">11-20</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button className='w-full mt-4 h-12 text-[1.11rem]' onClick={handleNext}>Create Account</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
