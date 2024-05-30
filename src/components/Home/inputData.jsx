import React from 'react';
import { IoIosClose } from "react-icons/io";

const inputData = ({inputDiv, setInputDiv}) => {
  return (
    <>
      <div className= {`${inputDiv} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}></div>
      <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className='w-2/6 bg-gray-900 p-4 rounded'>
        <div className='flex justify-end'>
          <button className='text-3xl' onClick={()=>setInputDiv("hidden")}>
          <IoIosClose />
          </button>
        </div>
          <input 
            type='text' 
            placeholder='Title' 
            name="title" 
            className='px-3  py-2 rounded w-full bg-gray-700 my-3 '/>
            <textarea
              name='description'
              id=''
              cols="30"
              rows="10"
              placeholder="Description"
              className='px-3 py-2 rounded w-full bg-gray-700 my-3'
            ></textarea>
            <button className='px-3 py-2 bg-yellow-400 rounded text-black text-xl font-semibold'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default inputData;