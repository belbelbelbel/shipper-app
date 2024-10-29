import React from 'react'
import { Outlet } from "react-router-dom"
export const MainContainer = () => {
    const LinkArray = [
        {
            path: 'overview',
            name: 'Dashboard',
        },
        {
            path: 'overview/settings',
            name: 'Settings',
        }
    ]
    return (
        <div className='w-screen h-screen'>
            <div className='flex w-full h-full bg-black bg-blue-100 bg-opacity-[0.3]'>
                <div className='flex flex-col  text-white  w-[20%] items-center h-[100%] shadow  bg-white'>
                    {LinkArray.map(link => (
                        <div key={link.path} className='w-[12rem] mt-4 h-8 rounded-[5px] text-black cursor-pointer '>
                            <a href={`/${link.path}`} className=''>{link.name}</a>
                        </div>
                    ))}
                </div>
                <div className='h-[100%] w-[80%]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
