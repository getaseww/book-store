import React from 'react'

export default function SizedBox({type}) {
  return (
    <div>
        {type=="h-10"?<div className='h-10'></div>:<div className='v-10'></div>}       
         {/* {type=="v-10"&&<div className='v-10'></div>} */}

    </div>
  )
}
