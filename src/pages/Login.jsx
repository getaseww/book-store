import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import SubTitle from '../components/SubTitle'
import SizedBox from '../components/SizedBox'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Login() {

    const [email,setEmail]=useState("name")
    const [password,setPassword]=useState()

    const [query,setQuery]=useState()

    let location=useLocation();

    console.log("location",location);

    
   const handleLogin=()=>{
   }


//    useEffect(()=>{
//     setEmail((email)=>email+" "+email)
//    },[email])

   const {count}=useSelector((state)=>state.counter)
   const {products,pending}=useSelector((state)=>state.product)

    return (
        <div className='wrapper w-full h-full'>
            <div></div>
            <div className='minWrapper'>
                <div className='card col'>
                    <div className='padding-20'>
                        <Title>Materio </Title>
                        <div className='w-100 justify-start'>
                            <SizedBox type="v-10" />
                            <SizedBox type="v-10" />
                            <Title>Welcome to Materialize! 👋🏻</Title>
                            <SubTitle>Please sign-in to your account and start the adventure</SubTitle>
                        </div>
                        <Input type="text" placeholder="Email"  handleChange={setEmail}/>
                        <SizedBox type="v-10" />
                        <Input type="password" placeholder="Password" handleChange={setPassword}/>
                        <SizedBox type="v-10" />
                        <div className='justify-start'>

                        <SubTitle>Don't have an account <Link to="/register" state={{name:"test"}}   >Register</Link> </SubTitle>
                        </div>
                        <Button handleClick={handleLogin}>Login</Button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
