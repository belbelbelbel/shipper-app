import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
    const [isselected, setIsselected] = useState<number | ''>(
    '' 
    )
    // () => Number(localStorage.getItem('selectedRoleId')) || 
    const navigate = useNavigate()
    const array = [
        {
            id: 1,
           
            img: 'src/assets/Seller.png',
            title: 'Business',
        },
        {
            id: 2,
            img: 'src/assets/Supplier.png',
            title: 'Supplier',
        },
    ]
    const handleSelect = (id: number | any) => {
        setIsselected(id)
        localStorage.setItem('selectedRoleId', id)
    }


    const handleNext = () => {
       if(isselected) {
       if(isselected === 1) {
        navigate('/signup/PI')
       }
       else{
        navigate('/signup/SI')
       }
       }
    }
    return (
        <div className=' bg-opacity-[0.3] flex flex-col justify-center gap-16 items-center h-screen w-screen '>
            <div className='text-2xl uppercase font-medium'>Select Your Role</div>
            <div className='flex w-[80%] items-center justify-center  mx-auto'>
                {
                    array.map((item, index) => (
                        <div key={index} className={`w-[19rem] mx-10 justify-center gap-4 flex flex-col items-center rounded-[10px] cursor-pointer  h-60  ${isselected === item.id ? 'bg-black transition ease-out duration-300 text-white' : 'shadows'}`} onClick={() => handleSelect(item.id)}>
                            <img className='text-[] w-[5rem]' src={item.img} />
                            <div className='text-[1.5rem]'> {item.title}</div>
                        </div>
                    ))
                }
            </div>
            <div className='flex w-[20%] items-center mx-auto justify-between '>
                {/* <div className='px-10 py-2 bg-transparent border-2 border-black text-black font-bold cursor-pointer  rounded-full' onClick={()=>navigate('/')}>Back</div> */}
                <div className={` bg-black py-3 w-full text-center rounded-full ${isselected !== "" ? "bg-black transition ease-out duration-700 text-white": " text-white bg-black border-black border-2" } font-bold cursor-pointer`} onClick={handleNext}>Next</div>
            </div>
        </div>
    )
}
