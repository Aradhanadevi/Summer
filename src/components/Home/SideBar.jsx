import React from 'react'

const SideBar = () => {
    const data= [
        {
            title: "All Task",
        },
        {
            title: "Completed Task",
        },
        {
            title: "Pending Task",
        },
        {
            title: "Important Task",
        }
    ];
  return (
    <div className='flex flex-col bg-pink-400'>
        <div>
            <h2 className='text-xl font-semibold'>The best website ever!!!</h2>
            <h4 className='mb-1 text-gray-400'>devi@gmail.com</h4>
            <hr/>
        </div>
        <div>
            {data.map((items, i) =>(
            <div className='my-2'>{items.title}</div>
            ))}
        </div>
        <div><button className='bg-gray-500 w-full p-2 rounded'>Log Out</button></div>
    </div>
  )
}

export default SideBar