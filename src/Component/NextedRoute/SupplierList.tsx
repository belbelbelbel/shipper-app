import React from 'react'
import { MdCancel } from 'react-icons/md'

type Supplier = {
    id: number;
    name: string;
    phone: string;
    location: string;
    alterEgo?: string;
    description?: string;
};

interface SupplierProps {
    handleClick: (id: any) => void
    clicked: Number
    items: Supplier
}
export const SupplierList = ({ handleClick, clicked, items }: SupplierProps) => {
    return (
        <div className=' w-[70%] justify-center flex items-center' onClick={handleClick}>
            {
                clicked === items.id && (
                    <div className='w-full h-full bg-black inset-0 flex  justify-center z-50 items-center fixed bg-opacity-[0.1]'>
                        <div className='w-[45%] h-[55%] flex flex-col flex relative items-center bg-white rounded-[15px]'>
                            <div className='flex flex-col   w-full h-[40%] bg-black bg-opacity-[1] rounded-[15px] supplier-bg ' >
                                <div className='absolute right-6 top-2'>
                                    <MdCancel size={43} color='black' className='shadow' onClick={handleClick} />
                                </div>
                                {/* <div className='text-2xl text-center'> {items.name}</div> */}
                            </div>
                            <div className=' w-full flex flex-col items-center h-[60%]'>
                                <div className='w-[8rem] h-[8rem] absolute rounded-full top-[5rem]  shadow bg-black'>
                                    <img src="/src/assets/user2.png" alt="userpng" />
                                </div>
                                <div className='mt-16 w-full '>
                                    <div className='text-2xl text-center'> {items.name}</div>
                                    <div className='text-xl text-center font-bold absolute bottom-6 left-4 self-left' style={{fontFamily:"cursive"}}> {items.alterEgo}</div>
                                    <div className=' text-center tracking-[0.1rem] self-left'> {items.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
