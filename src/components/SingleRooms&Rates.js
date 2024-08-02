import React from "react";



const SingleRooms = ({img, title, description, pic}) =>{
    return(
        <div className="shadow-lg rounded-lg hover:shadow-2xl
        transition-shadow duration-500 h-full">
         <div className="relative">
            <img className="w-full h-full" src={img} alt="car 1"/>
            <img src={pic} alt="" className="absolute bottom-0"/>     
            </div>

         <div className="space-y-2 inline-block">
            <h3 className="font-semibold pt-2 text-sm">{title}</h3>
            <p className="text-[12px] ">{description}</p>

             
           

         </div>
        </div>
    )
}
export default SingleRooms;