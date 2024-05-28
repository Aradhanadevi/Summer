import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdImportantDevices } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const data= [
        {
            title: "All Task",
            icon: <CgNotes/>,
            link: "/",
        },
        {
            title: "Completed Task",
            icon: <FaCheck/>,
            link: "/completedtask",
        },
        {
            title: "Pending Task",
            icon: <MdOutlinePendingActions/>,
            link: "/pendingtask",
        },
        {
            title: "Important Task",
            icon: <MdImportantDevices/>,
            link: "/importanttask",
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
            <Link  to={items.link} 
            key={i}
            className='my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300'> 
             {items.icon} &emsp; {items.title}
            </Link>
            ))}
        </div>
        <div><button className='bg-gray-500 w-full p-2 rounded'>Log Out</button></div>
    </>
  )
}

export default SideBar