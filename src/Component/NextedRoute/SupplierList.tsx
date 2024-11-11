import React, { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Suppliers } from '@/@types';
import { FaRocketchat } from "react-icons/fa6";

interface SupplierProps {
    handleClick: (id: any) => void
    clicked: Number
    items: Suppliers
}

export const SupplierList = ({ handleClick, clicked, items }: SupplierProps) => {
    const [data, setData] = useState('')
    useEffect(() => {
        const handleFetch = async (latitude: any, longitude: any) => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=daf3468e726e9c4d555abe56aedd75b6&units=metric`)
            const result = await res.json()
            console.log(result.name)
            setData(result.name)
        }
        handleFetch(items.latitude, items.longitude)
    }, [])
    return (
        <div className=' w-[70%] justify-center flex items-center' onClick={handleClick}>
            {
                clicked === items.id && (
                    <div className='w-full h-full bg-black inset-0 flex  justify-center z-50 items-center fixed bg-opacity-[0.1]'>
                        <div className='w-[45%] h-[55%] flex flex-col flex relative items-center bg-white rounded-[15px]'>
                            <div className='flex flex-col   w-full h-[40%] bg-black bg-opacity-[1] rounded-[15px] supplier-bg ' >
                                <div className='absolute right-6 top-2'>
                                    <MdCancel size={43} color='white' className='shadow' onClick={handleClick} />
                                </div>
                                {/* <div className='text-2xl text-center'> {items.name}</div> */}
                            </div>
                            <div className=' w-full flex flex-col items-center h-[60%]'>
                                <div className='w-[8rem]  flex items-center h-[8rem] absolute rounded-full top-[5rem]  shadow bg-black'>
                                    <img src="/src/assets/user2.png" alt="userpng" />
                                    <div className='relative top-10 text-xl whitespace-nowrap'>{data}</div>
                                </div>
                                <div className='mt-16 w-full '>
                                    <div className='text-2xl text-center'> {items.name}</div>
                                    <div className='text-xl text-center font-bold absolute bottom-6 left-4 self-left' style={{ fontFamily: "cursive" }}> {items.alterEgo}</div>
                                    <div className='text-xl text-center flex gap-4 font-bold absolute bottom-6 right-4 self-left' style={{ fontFamily: "cursive" }}>
                                        <div><FaWhatsapp size={26} color='green' /></div>
                                        <div><FaRocketchat size={26} color='gray' /></div>
                                        <div><BsTwitterX size={26} /></div>
                                        <div><FaInstagram size={26} color='blue' /></div>
                                    </div>
                                    <div className=' text-center tracking-[0.1rem] self-left'> {items.description} {data}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
