import React, { useEffect, useState } from 'react'
import Input from '../components/Input';
import axios from 'axios';

export default function Home() {
  const [query, setQuery] = useState();

  const [data,setData]=useState();
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    const fetchData = async() => {
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
      axios.put("https://dummyjson.com/products/1",data)
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

  

  return (
    <div>
      <Input placeholder="query" type="text" handleChange={setQuery} />

      {data&&data.products.length==0?
      <h1>NO data</h1>
      :data.products.map((d)=>(
        
        <h1>{d.title}</h1>
      ))}
    </div>
  )
}
