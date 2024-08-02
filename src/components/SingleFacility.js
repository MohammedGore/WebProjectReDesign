import React from "react";



const SingleFacility = ({img, title, description, price}) =>{
    return(
        <div className="shadow-lg rounded-lg relative hover:shadow-2xl
        transition-shadow duration-500 h-full">
         <div>
            <img className="w-full h-52 md:h-70" src={img} alt="car 1"/>
         </div>

         <div className="space-y-2 inline-block">
            <h3 className="font-semibold text-sm text-center">{title}</h3>
            <p className="text-[12px] text-center p-2">{description}</p>
         </div>
        </div>
    )
}
export default SingleFacility;