import React from "react";



const SinglePopularOffering = ({img, title, description, price}) =>{
    return(
        <div className="shadow-lg rounded-lg relative hover:shadow-2xl
        transition-shadow duration-500 h-full">
         <div>
            <img className="w-full h-full" src={img} alt="car 1"/>
         </div>

         <div className="space-y-2 inline-block">
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-[12px] ">{description}</p>

             <div className="flex items-end pt-10 gap-5">
                <p className="font-bold absolute bottom-0 left-0">{price}</p>
                <button className="bg-orange-400 px-2 py-2 absolute text-white bottom-0 right-0">Book Now</button>
            </div>
           

         </div>
        </div>
    )
}
export default SinglePopularOffering;