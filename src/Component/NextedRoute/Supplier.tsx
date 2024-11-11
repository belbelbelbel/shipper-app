import React, { useState } from 'react'
import { SupplierList } from './SupplierList';
import { FaWpexplorer } from "react-icons/fa6";
import { arrayBox } from '@/Constant';
export const Supplier = () => {
  const [clicked, setClicked] = useState<Number>(0)

  const handleClick = (id: any) => {
    setClicked(clicked === id ? '' : id)
    console.log(id)
  }

  const handleRemove = () => {
    setClicked(0)
    console.log('removed')
  }

  return (
    <div className='w-full  h-full overflow-y-auto'>
      <div className='flex max-w-[92%]   mx-auto m-10  gap-8 flex-wrap'>
        {
          arrayBox.map((items) => (
            <div key={items.id} className='w-[13rem] flex-col gap-4 h-[13rem] rounded-[10px] cursor-pointer  justify-center items-center flex  bg-white shadow-md' >
              <img src="/src/assets/user.png" alt="" className='w-[5rem] h-[5rem]' />
              <div className=''>{items.name}</div>
              <div className='relative   w-full'>
                <div className='absolute right-4  text-[0.9rem] top-2 font-bold'><FaWpexplorer size={25} onClick={() => handleClick(items.id)}/></div>
              </div>
              <SupplierList handleClick={handleClick} clicked={clicked} items={items} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
