import React from "react";
import Background from '../assets/images/contactbg.png'

const Contact = () =>{
    return(
        <section className=" h-full mt-20 mb-10" style={{backgroundImage: `url(${Background})`}}>
        <div className="py-20 space-y-6 text-center">
            <h2 className="font-bold text-2xl">Be in the know.</h2>
            <p>Get the latest info on the best deals, offers and promotions.</p>
            <input className="w-5/6 md:w-2/6 text-center py-2" type="text" placeholder="*First Name" /> <br/>
            <input className="w-5/6 md:w-2/6 text-center py-2" type="email" placeholder="*Email Address"/><br/>
            <button className="text-white bg-orange-500 py-3 px-6">Get Email Updates</button>
        </div>
        </section>
    )
}
export default Contact;