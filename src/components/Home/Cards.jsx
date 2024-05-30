import React, {useState} from 'react';
import { CiHeart } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const Cards = () => {
    const data = [
        {
            title:"Dance",
            desc: "Can't do anything but dance ."
        },
        {
            title:"Cry",
            desc: "My favourite hobbie"
        },
        {
            title:"Anixiety",
            desc: "Just my true best friend cause it never leaves me alone."
        },
        {
            title:"Happy",
            desc: "One day I will be happy with myself."
        },
    ];
    const [ImportantButton, setImportButton] = useState("Pending");
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
        {data && data.map((items, i) => (
        <div className=" flex flex-col justify-between bg-gray-700 rounded-sm p-4">
            <div className="bg-gray-700 rounded-sm p-4">
                <h3 className="text-xl font-semibold">{items.title}</h3>
                <p className="text-gray-300 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
                <button className='bg-red-500 p-2 rounded'>Pending</button>
                <div className="text-white p-2 w-3/6 text-xl font-semibold flex justify-around">
                    <button><CiHeart/></button>
                    <button><CiEdit/></button>
                    <button><MdDelete/></button>
                </div>
            </div>
        </div>
    ))}
    <div className="flex flex-col justify-center items-center bg-gray-700 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300" >
        <IoIosAddCircleOutline className="text-5xl"/>
        <h2 className="text-2xl mt-4 ">Add New Task</h2>
    </div>
    </div>
  );
};

export default Cards;