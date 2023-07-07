import React, { Children } from 'react'


export default function Button({children,handleClick}) {
  return (
    <div>
        <button className='button' onClick={()=>handleClick()}>{children}</button>
    </div>
  )
}
