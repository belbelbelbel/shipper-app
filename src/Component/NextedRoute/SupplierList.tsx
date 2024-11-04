import React from 'react'
import { MdCancel } from 'react-icons/md'

interface SupplierProps {
    handleClick: (id: any) => void
    clicked: Number
    items: any
}
export const SupplierList = ({handleClick,clicked,items}:SupplierProps) => {
    return (
        <div className=' w-[70%] justify-center flex items-center' onClick={handleClick}>
            {
                clicked === items.id && (
                    <div className='w-full h-full bg-black inset-0 flex  justify-center z-50 items-center fixed bg-opacity-[0.1]'>
                        <div className='w-[40%] h-[40%] flex  bg-white rounded-[15px]'>
                            <div className='flex flex-col  w-full '>
                                <MdCancel size={43} color='red' onClick={handleClick} />
                                <div className='text-2xl text-center'> {items.name}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
