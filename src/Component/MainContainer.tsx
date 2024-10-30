import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
export const MainContainer = () => {
    const navigate = useNavigate()
    const LinkArray = [
        {
            icon: <MdDashboard size={22} />,
            path: 'overview',
            name: 'Dashboard',
        },
        {
            icon: <IoSettingsSharp size={25} />,
            path: 'overview/settings',
            name: 'Settings',
        },
        {
            icon: <IoIosPeople size={25} />,
            path: 'overview/suppliers',
            name: 'Suppliers',
        },
        {
            icon: <IoMdNotifications size={25} />,
            path: 'overview/notifications',
            name: 'Notifications',
        }
    ]
    return (
        <div className='w-screen bg-blue-100 bg-opacity-[0.3] h-screen'>
            <div className='flex w-full  h-[100%] overflow-hidden'>
                <div className='w-[20%] py-4 flex flex-col justify-between  shadow-xl bg-white h-full'>
                    <div className='flex flex-col gap-3 text-white   items-center h-full   '>
                        <div className='self-start flex w-[70%] mx-auto '>
                            <div className='text-[2.2rem] text-black hero-logo tracking-[1px]'>Shi-Go</div>
                        </div>
                        {LinkArray.map(link => (
                            <div key={link.path} className='w-[12rem] mt-4 h-7 rounded-[5px] text-black cursor-pointer '>
                                <a href={`/${link.path}`} className=''>
                                    <div className='flex items-center gap-4'>
                                        <div > {link.icon}</div>
                                        <div>{link.name}</div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='flex w-[80%] cursor-pointer mx-auto items-center gap-4'>
                        <div ><IoLogOut size={30} /></div>
                        <div onClick={() => navigate('/signin')}>Logout</div>
                    </div>
                </div>
                <div className='h-[100%] w-[80%]'>
                    <div className='w-full items-center px-20 flex justify-end h-20 bg-white  shadow-md'>
                        <div className='items-center justify-center flex w-full'>
                            <input type="text" className='border-[0.8px] border-black w-[80%] text-[1.05rem] mx-auto px-4 py-2 outline-0 shadow-md rounded-[10px]' placeholder='e.g agricultural aspect' />
                        </div>
                        <div className='cursor-pointer w-[30%] gap-3 flex items-center'>
                            <img src="/src/assets/profilepic.png" alt="profile" className='w-12 h-12' />
                            <div className='flex w-full flex-col'>
                                <div className='text-[0.9rem]'>Bendee</div>
                                <div>Business made</div>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
