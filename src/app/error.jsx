'use client'
import  { useEffect } from 'react'

export default function error ({error,reset}) {
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <div className=' text-center mt-10'>
      <h2>fs</h2>
      <h1>Something went wrong.Please try again.</h1>
      <button className='hover:text-amber-600' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
