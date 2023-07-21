import React, { useEffect, useState } from 'react'
import Input from '../components/Input';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../components/Title';
import SizedBox from '../components/SizedBox';
import { decrement, increment } from '../store/actions/counterActions';

export default function Home() {
  const [query, setQuery] = useState();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      axios.get("https://dummyjson.com/products")
        .then(res => {
          if (res.status == 200) {
            setLoading(true);
            setData(res.data);
            console.log("success")
          }
        }).catch(error => console.log(""))
    }

    const postData = () => {
      let data = {
        price: 200,
        title: "test title"
      }
      axios.put("https://dummyjson.com/products/1", data)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      // fetch("https://dummyjson.com/products/add",
      //   {
      //     method: "",
      //     headers: { "content-type": "application/json" },
      //     body: JSON.stringify(data)
      //   })
      //   .then(res => res.json())
      //   .then(data => console.log("from post req", data))
    }
    // fetchData()
    postData()
  }, [query])


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log("form data", data);
  };

  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch();

  const handleIncrement=()=>{
    dispatch(increment());
  }

  const handleDecrement=()=>{
    dispatch(decrement())
  }
  



  

  return (
    <div className='wrapper'>

      {/* <Input /> */}

      {/* <Input placeholder="query" type="text" handleChange={setQuery} />

      {data&&data.products.length==0?
      <h1>NO data</h1>
      :data.products.map((d)=>(
        
        <h1 >{d.title}</h1>
      ))} */}

      {/* <form onSubmit={handleSubmit(onSubmit)} className='col'>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name', { required: true, maxLength: 30 })} />
        {errors.name && errors.name.type === "required" && <span>This is required</span>}
        {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
        <label htmlFor="age">Age</label>

        <input {...register('age', { required: true, maxLength: 3, min: 0 })} />
        {errors.age && errors.age.type === "required" && <span>This is required</span>}
        {errors.age && errors.age.type === "maxLength" && <span>Max length exceeded</span>}

        <input type="submit" />
      </form> */}


      <div>

      </div>
      <div>
        <button onClick={()=>handleIncrement()}  className='button'>+</button>
        <SizedBox type="v-10" />
        <button onClick={()=>handleDecrement()} className='button'>-</button>
        <Title>{counter.count}</Title>
      </div>
    </div>
  )
}
