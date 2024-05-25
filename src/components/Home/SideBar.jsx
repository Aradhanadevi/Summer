import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdImportantDevices } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const SideBar = () => {
    const data= [
        {
            title: "All Task",
            icon: <CgNotes/>
        },
        {
            title: "Completed Task",
            icon: <FaCheck/>
        },
        {
            title: "Pending Task",
            icon: <MdOutlinePendingActions/>
        },
        {
            title: "Important Task",
            icon: <MdImportantDevices/>
        }
    ];
  return (
    <>
        <div>
            <h2 className='text-xl font-semibold'>The best website ever!!!</h2>
            <h4 className='mb-1 text-gray-400'>devi@gmail.com</h4>
            <hr/>
        </div>
        <div>
            {data.map((items, i) =>(
            <div className='my-2 flex items-center hover:bg-black p-2 rounded transition-all duration-300'> 
             {items.icon} &emp {items.title}
            </div>
            ))}
        </div>
        <div><button className='bg-gray-500 w-full p-2 rounded'>Log Out</button></div>
    </>
  )
}

export default SideBar