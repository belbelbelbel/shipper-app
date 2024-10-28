import React from 'react'

interface InputProps {
    type: string,
    value: string,
    name: string,
    placeholder: string,
    className?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  
}
export const Inputs = ({type,value,name,placeholder,className,onChange}:InputProps) => {
  return (
    <div>
        <input type={type}  value={value} onChange={onChange}  name={name} placeholder={placeholder} className={className}/>
    </div>
  )
}
