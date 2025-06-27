import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Ex = () => {

 const [data, setdata] = useState([])

       const getData = async()=>{
        
       const response= await axios.get('https://jsonplaceholder.typicode.com/users')
       
    setdata(response.data)

       }

       useEffect(()=>{
          getData()
       },[])
  return (
    <div className='p-10'>
       <button onClick={getData} className='p-5 mt-5 bg-gray-900 text-white px-6 py-7 rounded active:scale-90 '>Get Data</button>
             <div className='pt-5 mt-5 bg-gray-500'>hello</div>
    </div>
  )
}

export default Ex;
