import React from "react";
import Slider from '../assets/images/Sliders.png'
import DOwnArrow from '../assets/images/Down Arrow.png'
import Background from '../assets/images/Background.png'
import Navbar from "./Navbar";
import { Slide } from "react-awesome-reveal";
import Image1 from "../assets/images/Rooms&Suites.png"
import SinglePopularOffering from "./SinglePopularOffering";
import Gardern from '../assets/images/Garden Premier.png'
import Family from '../assets/images/Family Suite.png'
import Govenor from '../assets/images/Governors Suite.png'
import { Bounce } from "react-awesome-reveal";
import MyCarousel from './MyCarousel'
import SingleFacility from "./SingleFacility";
import Meeting from '../assets/images/Meeting Room.png'
import Restuarant from '../assets/images/Restaurant.png'
import Swimming from '../assets/images/Swimming Pool.png'
import Conference from '../assets/images/Conference.png'
import Movie from '../assets/images/Movie theater.png'
import Lounge from '../assets/images/Lounge.png'
import Message from "./Message";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";




const Home = ()=>{
    return(
        <>
        <div className="relative bg-cover bg-blend-multiply bg-[#000000BF] text-white" style={{backgroundImage: `url(${Background})`}}> 
        <Navbar/>
        <ScrollToTop />
            <p className="uppercase text-white bg-stone-700 md:w-[18%] w-[23%] font-semibold mt-20 mb-20">Covid-19 information</p>
        <img className="absolute left-10 w-2 h-10"  src={Slider} alt=""/>
        <div className="justify-center items-center text-center text-white">
            <h2 className="text-sm font-semibold">Welcome to <br/><br/> <span className="uppercase text-3xl font-bold border-b-2">Kigoma</span></h2>
            <p className="text-sm mt-5 mb-5">ENJOY YOUR STAY</p>
            <img className="mx-auto w-5 mt-10 pb-10 cursor-pointer animate-bounce" src={DOwnArrow} alt=""/>
        </div>
        </div>

        <section className="flex flex-col md:flex-row py-20 h-full overflow-hidden p-10 gap-5">
          
          <div className="w-full md:w-1/2  h-[60vh] flex flex-col 
           justify-center">
                <Slide direction="left">
                   <h2 className="font-bold text-2xl">Rooms & Suites</h2>
               <p className="text-[12px] ">A holistic approach to luxury living, the Kigoma offers 297
                    curated rooms & suites<br/> that ensure that guests would never want, or need, to leave. Guests
                     are invited to <br/>customize their luxury stay with a selection of the most exquisite room 
                     offerings<br/> available, including seven distinct suite categories featuring private and open 
                     floor<br/> layouts as well as outdoor terraces and city and garden-view balcony options.
                </p>
                <div className="space-x-5 font-semibold mb-10 md:mb-0 mt-5 lg:mt-5">
                   <button className="bg-white text-black border-black  border-2 p-2">View Rooms & Suites</button>
                   <button className="bg-orange-500 text-white py-3 px-4">Book Now</button>
                </div>
                </Slide>
           </div>
         
           <Slide direction="right" className="w-full md:w-1/2 h-[60vh] overflow-hidden">
           <img src={Image1} alt="" className="h-full w-full" />
           </Slide>
         </section>

         <section className="w-full flex justify-center items-center pb-40 ">
         <div className="w-[90%] space-y-8">
          <h2 className="font-bold text-center text-2xl">Popular Offerings</h2>
         <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Bounce cascade>
         <SinglePopularOffering 
         img={Gardern}
         title={"Garden Premier"}
         description={"Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view"}
         price={"From ₦ 40,000/night"}

         />
         <SinglePopularOffering 
         img={Family} 
         title={"Family Suite"}
         description={"Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family."}
         price={"From ₦ 50,000/night"}/>
         
         <SinglePopularOffering
          img={Govenor}
          title={"Governor’s Suite"}
          description={"Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
         price={"From ₦ 170,000/night"}/>
        
         </Bounce>
         </div>
         
         </div>

        </section>
        

     <MyCarousel />

     <section className="w-full flex justify-center items-center pb-40 mt-10 ">
         <div className="w-[90%] space-y-8">
          <h2 className="font-bold text-center text-2xl">Facilities</h2>
         <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Bounce cascade>
         <SingleFacility 
         img={Meeting}
         title={"Meeting Room"}
         description={"A 20-seater meeting room is on ground at the Kigamo for your business meetings and client negotiations."}

         />
         <SingleFacility 
         img={Restuarant} 
         title={"Restaurant"}
         description={"Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family."}
         />
         
         <SingleFacility
          img={Swimming}
          title={"Swimming Pool"}
          description={"Classy master of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
         />

         <SingleFacility
          img={Conference}
          title={"Conference Hall"}
          description={"Two 150-seater conference halls equipped with smart monitors for presentations for conferences and meet-ups."}
         />

         <SingleFacility
          img={Movie}
          title={"Movie Theater"}
          description={"Three 50-seater movie rooms with standard screens are available to visitors at Kigamo."}
         />

          <SingleFacility
          img={Lounge}
          title={"Lounge"}
          description={"Open lounge with a view of the game reserve and a bar for refreshments. The lounge also features a live band."}
         />
        
         </Bounce>
         </div>
         
         </div>
        </section>

        <Message />
        <Contact />
        <Footer />

        </>
        
    )
}
export default Home;