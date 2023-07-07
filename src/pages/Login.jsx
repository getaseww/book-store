import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import SubTitle from '../components/SubTitle'
import SizedBox from '../components/SizedBox'

export default function Login() {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const [query,setQuery]=useState()

    
   const handleLogin=()=>{
   }


   useEffect(()=>{

    console.log("email changed")
   },[query,email,password])

    return (
        <div className='wrapper w-full h-full'>
            <div></div>
            <div className='minWrapper'>
                <div className='card col'>
                    <div className='padding-20'>
                        <Title>Materio</Title>
                        <div className='w-100 justify-start'>
                            <SizedBox type="v-10" />
                            <SizedBox type="v-10" />
                            <Title>Welcome to Materialize! 👋🏻</Title>
                            <SubTitle>Please sign-in to your account and start the adventure</SubTitle>
                        </div>
                        <Input type="text" placeholder="Email" handleChange={setEmail}/>
                        <SizedBox type="v-10" />
                        <Input type="password" placeholder="Password" handleChange={setPassword}/>
                        <SizedBox type="v-10" />
                        <Button handleClick={handleLogin}>Login</Button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
