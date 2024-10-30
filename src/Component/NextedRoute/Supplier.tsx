import React from 'react'

export const Supplier = () => {
  const arrayBox:any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <div className='w-full mb-6 h-full overflow-auto'>
      <div className='flex max-w-[92%] mx-auto m-10 gap-8 flex-wrap'>
        {
          arrayBox.map(() => (
            <div className='w-[13rem] h-[13rem] cursor-pointer  justify-center items-center flex  bg-white shadow'>
              <img src="/src/assets/user.png" alt="" className='w-[4rem] h-[4rem]'/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
