import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.png'
import Calendar from '../assets/images/Calendar.png'
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () =>{
    const [nav, setNav] = useState(false)
    return(
        <div >
        <nav className="w-full flex justify-center p-4 relative">
            <div className="flex justify-between w-[90%] items-center">
                <Link to={"/"} >
                <img src={Logo} alt="logo-image" />
                </Link> 

                <ul className="gap-12 hidden lg:flex font-semibold">
                    <Link className="hover:text-blue-500" to={"/"}>Home</Link>
                    <Link className="hover:text-blue-500" to={"/rooms"}>Rooms</Link>
                    <Link className="hover:text-blue-500" to={"/facilities"}>Facilities</Link>
                    <Link className="hover:text-blue-500" to={"/contact"}>About Us</Link>
                </ul>
      
                {nav && (
                    <ul className="gap-8 font-semibold flex flex-col fixed top-0 right-0 bg-black h-screen
                    p-10 space-y-8 text-lg z-50 text-white">
                    <Link className="hover:text-blue-500" to={"/"}>Home</Link>
                    <Link className="hover:text-blue-500" to={"/rooms"}>Rooms</Link>
                    <Link className="hover:text-blue-500" to={"/facilities"}>Facilities</Link>
                    <Link className="hover:text-blue-500" to={"/contact"}>About Us</Link>
                </ul>
                )}

                {!nav ? (
                  <div className="text-orange-500 cursor-pointer lg:hidden">
                  <GiHamburgerMenu size={24} onClick={() =>setNav(true)}  />
                  </div>
                ):

                nav && (
                    <div className="text-orange-500 cursor-pointer lg:hidden">
                    <IoIosCloseCircleOutline size={24} onClick={() =>setNav(false)}  />
                    </div>
                )}

                
                

                
                    <button className="flex gap-4 bg-orange-500 py-2 px-6 text-white">
                        <img src={Calendar} alt='' />
                        Reservations
                    </button>
                
            </div>
        </nav>
        <Outlet />
        </div>
    )

}
export default Navbar;