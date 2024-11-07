import React from 'react'
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoAccessibilitySharp, IoSettingsSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";

export const MainContainer = () => {
    const BusinessName = localStorage.getItem('selectedRoleId')
    const navigate = useNavigate()
    const location = useLocation()
    const profilename = localStorage.getItem('profilename') || '';
  
    const LinkArray = [
        {
            icon: <MdDashboard size={22} />,
            path: 'overview',
            name: 'Dashboard',
        },
        {
            icon: <RiLinksFill size={25} fontWeight={'bold'}/>,
            path: 'overview/connections',
            name: 'Connections'
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
        }, 
         {
            icon: <IoSettingsSharp size={25} />,
            path: 'overview/settings',
            name: 'Settings',
        },
        {
            icon: <IoAccessibilitySharp size={25}/>,
            path: 'overview/inventory',
            name: 'Inventory'
        }
    ]

    const capitalizeFirstLetter = (string:string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const firstLetter = (value:string) => {
        return value.charAt(0).toUpperCase();
    }
    const capitalizedText = capitalizeFirstLetter(profilename);

    const firstLetterText = firstLetter(profilename);

    return (
        <div className='w-screen bg-blue-100 bg-opacity-[0.3] h-screen'>
            <div className='flex w-full h-[100%] overflow-hidden'>
                <div className='w-[20%] py-4 flex flex-col justify-between shadow-xl bg-white h-full'>
                    <div className='flex flex-col gap-3 text-white items-center h-full'>
                        <div className='self-start flex w-[70%] mx-auto'>
                            <div className='text-[2.2rem] text-black hero-logo tracking-[1px]'>Shi-Go</div>
                        </div>
                        {LinkArray.map(link => (
                            <div 
                                key={link.path} 
                                className={`w-[12rem] mt-4 h-7 rounded-[5px] text-black cursor-pointer 
                                    ${location.pathname === `/${link.path}` ? 'text-red-500 font-semibold' : 'text-gray-700'}`}
                            >
                                <a href={`/${link.path}`}>
                                    <div className='flex items-center gap-4'>
                                        <div>{link.icon}</div>
                                        <div>{link.name}</div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='flex w-[80%] cursor-pointer mx-auto items-center gap-4'>
                        <div><IoLogOut size={30} /></div>
                        <div onClick={() => navigate('/signin')}>Logout</div>
                    </div>
                </div>
                <div className='h-full pb-20 w-[80%]'>
                    <div className='w-full items-center pl-0 flex justify-end h-20 bg-white shadow-md'>
                        <div className='items-center justify-center flex w-full'>
                            <input 
                                type="text" 
                                className='border-[0.8px] border-black w-[80%] text-[1.05rem] mx-auto px-4 py-2 outline-0 shadow-md rounded-[10px]' 
                                placeholder='e.g agricultural aspect' 
                            />
                        </div>
                        <div className='cursor-pointer w-[30%] gap-3 flex items-center'>
                            <div className='w-[4rem] items-center justify-center flex h-[3rem] bg-blue-100 bg-opacity-[1] shadow rounded-[100%]'>
                                <div className='font-bold'>{firstLetterText}</div>
                            </div>
                            <div className='flex w-full flex-col'>
                                <div className='text-[1rem] font-bold'>{capitalizedText}</div>
                                <div>{BusinessName === '1' ? "Business Owner" : 'Supplier'}</div>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}


// when i click on each suplier i can access the descrition of the suppler and the location on the map  and then i can know the latitude and the longitude of the displacement on total order
