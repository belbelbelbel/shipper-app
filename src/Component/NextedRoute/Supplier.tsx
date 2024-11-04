import React, { useState } from 'react'
import { SupplierList } from './SupplierList';
import { FaWpexplorer } from "react-icons/fa6";
export const Supplier = () => {
  const [clicked, setClicked] = useState<Number>(0)

  type Supplier = {
    id: number;
    name: string;
    phone: string;
    location: string;
    alterEgo?: string;
    description?: string;
  };

  const arrayBox: Supplier[] = [
    { id: 1, name: "James Carter", phone: "+234-701-234-5678", location: "New York", alterEgo: "The Provider", description: "Reliable and efficient" },
    { id: 2, name: "Olivia Reed", phone: "+234-702-345-6789", location: "Los Angeles", alterEgo: "The Guardian", description: "Known for quality service" },
    { id: 3, name: "Liam Walker", phone: "+234-703-456-7890", location: "Chicago", description: "Quick deliveries across the state" },
    { id: 4, name: "Emma Brooks", phone: "+234-704-567-8901", location: "Houston", alterEgo: "Speedster", description: "Fast and dependable" },
    { id: 5, name: "Michael Kim", phone: "+234-705-678-9012", location: "Miami", description: "Affordable and trustworthy" },
    { id: 6, name: "Sophia Turner", phone: "+234-706-789-0123", location: "San Francisco", alterEgo: "The Conqueror", description: "Broad inventory and resources" },
    { id: 7, name: "William Lee", phone: "+234-707-890-1234", location: "Seattle", description: "Eco-friendly solutions" },
    { id: 8, name: "Grace O'Connor", phone: "+234-708-901-2345", location: "Boston", alterEgo: "The Optimizer", description: "Excellent customer support" },
    { id: 9, name: "Benjamin Scott", phone: "+234-709-012-3456", location: "Denver", description: "Flexible order quantities" },
    { id: 10, name: "Chidi Nwosu", phone: "+234-810-123-4567", location: "Atlanta", alterEgo: "The Planner", description: "Strategic supply solutions" },
    { id: 11, name: "Ngozi Okafor", phone: "+234-811-234-5678", location: "Philadelphia", description: "Specializes in bulk orders" },
    { id: 12, name: "Adebayo Adesina", phone: "+234-812-345-6789", location: "Phoenix", alterEgo: "Bulk Master", description: "Deals in wholesale" },
    { id: 13, name: "Fatima Bello", phone: "+234-813-456-7890", location: "Dallas", description: "High-quality products" },
    { id: 14, name: "Yusuf Ibrahim", phone: "+234-814-567-8901", location: "Austin", alterEgo: "Eco Advocate", description: "Sustainable practices" },
    { id: 15, name: "Chioma Obi", phone: "+234-815-678-9012", location: "San Diego", description: "On-time delivery specialist" },
    { id: 16, name: "Bola Adewale", phone: "+234-816-789-0123", location: "Orlando", alterEgo: "Precisionist", description: "Accurate order fulfillment" }
  ];

  const handleClick = (id: any) => {
    setClicked(clicked === id ? '' : id)
    console.log(id)
  }

  return (
    <div className='w-full mb-6 h-full overflow-auto'>
      <div className='flex max-w-[92%]   mx-auto m-10 gap-8 flex-wrap'>
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
