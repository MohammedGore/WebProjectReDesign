import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";



const SingleRooms = ({img, title, description, price}) =>{
    return(
        <div className="shadow-lg rounded-lg relative hover:shadow-2xl
        transition-shadow duration-500 h-full">
         <div>
            <img className="w-full h-full" src={img} alt="car 1"/>
         </div>

         <div className="space-y-2 inline-block">
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-[12px] ">{description}</p>

             <div className="flex gap-3 bottom-0 left-0">
             <FaArrowRightLong size={24} />
             <p>View Gallery</p>
            </div>
           

         </div>
        </div>
    )
}
export default SingleRooms;