import { Inputs } from '@/ReusableComponent/Inputs'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SuppliersSignup = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    address: '',
    alterEgo: '',
    description: ''
  });
  const isFormComplete = Object.values(value).every((val) => val.trim() !== "");
  localStorage.setItem('profilename', value.firstname);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (isFormComplete) {
      navigate('/overview')
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <div className='w-screen bg-black flex h-screen '>
      <div className='w-[50%] h-full bg-black relative'>
        <img src="/src/assets/pexels-4.jpg" loading='lazy' alt="signup_logo" className='object-cover w-full h-full' />
        <div className='bg-black h-full w-full absolute inset-0 bg-opacity-[0.2]'></div>
      </div>
      <div className='w-[50%] h-full flex justify-center flex-col bg-white'>
        <div className='w-[80%] mx-auto'>
          <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.firstname} name='firstname' onChange={handleChange} placeholder='Firstname' />
          <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.lastname} name='lastname' onChange={handleChange} placeholder='Lastname' />
          <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.address} name='address' onChange={handleChange} placeholder='Address' />
          <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.email} name='email' onChange={handleChange} placeholder='Email' />
          <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.password} name='password' onChange={handleChange} placeholder='Password' />
          <textarea name='description' onChange={handleChange} value={value.description} placeholder='What do you offer?' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[13vh] p-3'></textarea>
          <Inputs type='text' className='text-black outline-0 w-full rounded-[7px] mt-3 border-black bg-transparent border-2 h-[7vh] p-3' value={value.alterEgo} name='alterEgo' onChange={handleChange} placeholder='Alter Ego. Optional' />
          <Button className='w-full mt-4 h-12 text-[1.11rem]' onClick={handleNext}>Create Account</Button>
        </div>
      </div>
    </div>
  )
}
