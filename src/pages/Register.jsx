import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Register() {

    const location=useLocation();

    console.log("loc",location);
  return (
    <div>Register</div>
  )
}
