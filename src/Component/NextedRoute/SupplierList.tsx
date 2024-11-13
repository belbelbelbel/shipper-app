import React, { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Suppliers } from '@/@types';
import { FaRocketchat } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
interface SupplierProps {
    handleClick: (id: number) => void
    clicked: Number
    items: Suppliers
}

export const SupplierList = ({ handleClick, clicked, items }: SupplierProps) => {
    const [data, setData] = useState('')
    const [show, setShow] = useState(false)
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
        <div className=' w-[70%] justify-center flex items-center'>
            {
                clicked === items.id && (
                    <div className='w-full h-full bg-black inset-0 flex  justify-center z-50 items-center fixed bg-opacity-[0.1]'>
                        <div className='w-[45%] h-[55%] flex flex-col flex relative items-center bg-white rounded-[15px]'>
                            <div className='flex flex-col   w-full h-[40%] bg-black bg-opacity-[1] rounded-[15px] supplier-bg ' >
                                <div className='absolute right-6 top-2'>
                                    <MdCancel size={43} color='white' className='shadow' onClick={() => handleClick(items.id)} />
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
                                        <div > <a href={`https://wa.me/${items.phone}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={26} color='green' /></a></div>
                                        <div onClick={() => setShow(true)}><FaRocketchat size={26} color='blue' /> </div>
                                        <div><SiGmail size={26} color='red' /></div>
                                        <div><FaInstagram size={26} color='purple' /></div>
                                        
                                    </div>
                                    <div className=' text-center tracking-[0.1rem] self-left'> {items.description} {data}</div>
                                </div>

                            </div>


                        </div>
                        {
                            show && (
                                <div className='z-50 flex flex-col justify-between absolute bottom-2 shadows rounded-[10px] right-5 w-[30%] h-[80%] bg-white'>
                                    <div className='flex items-center shadow-md py-2 justify-around mt-4'>
                                        <div> <FaRocketchat size={29} /></div>
                                        <div className='font-medium text-[1.2rem]'>Let's chat😭</div>
                                        <div>
                                            <div className='flex  gap-2 justify-between' onClick={() => setShow(false)}>
                                                {/* <div><FaRegWindowMinimize size={26} className='relative bottom-2'/></div> */}
                                                <div><IoClose size={31} /></div>
                                            </div>
                                        </div>

                                    </div>
                                   
                                    <div className='flex items-center border-black border-t-[1px] w-full px-4'>
                                      
                                        <textarea placeholder='Enter a message....' className=' border-0 outline-0 p-2 w-[90%] mx-auto h-[6.5rem] border-black'/>
                                        <IoSend size={30}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}
