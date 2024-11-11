import React, { useEffect, useRef, useState } from 'react';
import { Inputs } from '../../ReusableComponent/Inputs';
import { Button } from "@/components/ui/button";
import { default as ReactSelect, components } from "react-select";
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

const Option = (props: any) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

export const PersonalInfo = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        firstname: '',
        email: '',
        password: '',
        company: '',
        address: '',
    });
    const [state, setState] = useState({ optionSelected: null });
    const isFormComplete = Object.values(value).every((val) => val.trim() !== "");
    localStorage.setItem('profilename', value.firstname);




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

    const handleChanges = (selected:any) => {
        setState({
          optionSelected: selected
        });
    };

    const smeSectorOptions = smeSectors.map((sector) => ({
        label: sector,
        value: sector
    }));
    

    return (
        <div className='w-screen bg-blue-100 bg-opacity-[0.3] flex h-screen'>
            <Toaster />
            <div className='w-[50%] h-full relative  bg-black'>
                <img src="/src/assets/pexels-4.jpg" loading='lazy' alt="signup_logo" className='object-cover w-full h-full' />
                <div className='bg-black h-full w-full absolute inset-0 bg-opacity-[0.2]'></div>
            </div>
            <div className='w-[50%] flex h-full flex-col justify-center  pt-10 gap-10'>
                <div className='w-[80%] mx-auto flex flex-col overflow-auto scrollbar py-4 gap-1'>
                    <div>
                        <div className='flex w-full justify-between items-center'>
                            <div className='font-bold text-[1.1rem] mb-1'>Personal Information</div>
                            <div className='text-[1rem] mb-2 cursor-pointer bg-black text-white px-8 py-1 rounded-[5px]' onClick={() => navigate('/signin')}>Sign In</div>
                        </div>
                        <form className='flex flex-col'>
                            <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.email} name='email' onChange={handleChange} placeholder='Email' />
                            <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.firstname} name='firstname' onChange={handleChange} placeholder='Name' />
                            <Inputs type='password' className='text-black outline-0 w-full rounded-[7px] mt-4 border-black bg-transparent border-2 h-[7vh] p-3' value={value.password} name='password' onChange={handleChange} placeholder='Password' />
                        </form>
                    </div>
                    <div className='w-full'>
                        <div className='font-bold text-[1.1rem] mb-1 mt-4'>Business Information</div>
                        <ReactSelect
                           options={smeSectorOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={true}
                            components={{
                                Option
                            }}
                            onChange={handleChanges}
                            className='border-black border-2 rounded-[7px] bg-transparent outline-0'
                            value={state.optionSelected}
                        // Hide dropdown list  when select any item
                        // closeMenuOnSelect={true}

                        //Selected Item Remove in dropdown list
                        // hideSelectedOptions={true}
                        />
                        <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-2 border-black bg-transparent border-2 h-[7vh] p-3' value={value.company} name='company' onChange={handleChange} placeholder='Business name' />
                     
                        
                        <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.address} name='address' onChange={handleChange} placeholder='Address' />
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Business size" />
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
