import React, { useState } from "react";
import { BsRocket } from "react-icons/bs";



const ScrollToTop = () =>{
    const [visible, setVisible] = useState(false)
    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true) 
        } else if(scrolled <= 300){
             setVisible(false)   
        }
    }; 

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    window.addEventListener('scroll', toggleVisible);
    return(
        <>
        
        <div 
        onClick={scrollToTop}
        className={`fixed bottom-20 right-20 z-50 text-6xl text-orange-600 cursor-pointer -rotate-45
        hover:rotate-0 transition-transform duration-700 bg-slate-600 p-4 rounded-full border-2 border-orange-700 ${
       visible ? "right-20": "-right-full"
        }`}>
         <BsRocket />
        </div>
        </>
    )
}
export default ScrollToTop;