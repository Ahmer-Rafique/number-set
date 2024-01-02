"use client"
import { useState } from "react"

const Number = () => 
{
    const [increease,setIcrease]= useState(0)
    const  setincrease = ()=>  {
        setIcrease(increease+1)
    }
    const setdecrese = ()=>{
        if (increease >= 0){
            setIcrease(increease-1)
        }else{
            alert("you did not decrease less then zero")
        }
    }
    

  return (
    <div  className="flex justify-center items-center mt-52 ">
     <div className=" py-9 px-9 outline outline-blue-900 space-y-4 ">
        <h3 className="outline outline-red-600 px-3 rounded-full text-white " >{increease}</h3>
       <div className="space-x-4">
         <button className="bg-lime-700 px-2 text-white rounded-full text-lg" onClick={setincrease}>increase</button>
        <button className="bg-red-600 px-2 text-white rounded-full text-lg" onClick={setdecrese}>decrease</button></div>
     </div>
    </div>
  )
}

export default Number