import React from 'react'

export default function Input({type,placeholder,handleChange}) {
  return (
    <div>
        <input type={type} placeholder={placeholder} className='input' onChange={(val)=>handleChange(val.target.value)}/>
    </div>
  )
}
