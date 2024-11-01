import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
export const Supplier = () => {
  const [clicked, setClicked] = useState<Number>(0)

  const arrayBox: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const handleClick = (id: any) => {
    setClicked(clicked === id ? '' : id)
    console.log(id)
  }

  return (
    <div className='w-full mb-6 h-full overflow-auto'>
      <div className='flex max-w-[92%]   mx-auto m-10 gap-8 flex-wrap'>
        {
          arrayBox.map((items: number, index: number) => (
            <div key={index} className='w-[13rem] flex-col gap-4 h-[13rem] rounded-[10px] cursor-pointer  justify-center items-center flex  bg-white shadow-md' onClick={() => handleClick(items)}>
              <img src="/src/assets/user.png" alt="" className='w-[5rem] h-[5rem]' />
              <div className='w-[70%] rounded-[5px] h-2 bg-blue-100 bg-opacity-[0.5]'></div>
              <div className='w-[60%] self-start mx-auto rounded-[5px] h-2 bg-blue-100 bg-opacity-[0.5]'></div>
              <div className=' w-[70%] justify-center flex items-center'>
                {
                  clicked === items && (
                    <div className='w-full h-full bg-black inset-0 flex justify-center items-center fixed bg-opacity-[0.1]'>
                      <div className='w-[40%] h-[40%] flex  bg-white rounded-[15px]'>
                        <div className='  w-full '>
                          <MdCancel size={43} color='red' onClick={handleClick}/>
                          <div className='text-2xl text-center'>Supplier {items}</div>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}
