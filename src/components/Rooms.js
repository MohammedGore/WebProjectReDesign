import React from "react";
import SingleRooms from "./SingleRooms&Rates";
import Gardern from '../assets/images/Garden Premier.png'
import Family from '../assets/images/Family Suite.png'
import Govenor from '../assets/images/Governors Suite.png'
import meeting2 from '../assets/images/Meeting Room2.png'
import Restuarant2 from '../assets/images/Restaurant2.png'
import Swimming2 from '../assets/images/Swimming Pool2.png'
import Group2 from '../assets/images/Group 2.png'
import Group3 from '../assets/images/Group 3.png' 
import Group4 from '../assets/images/Group 4.png'
import Group5 from '../assets/images/Group 5.png'
import Group6 from '../assets/images/Group 6.png'
import Group7 from '../assets/images/Group 7.png'
import { Bounce } from "react-awesome-reveal";
import Footer from './Footer'
import ScrollToTop from "./ScrollToTop";


const Rooms = () =>{
    return(
        
       <div>
        <section>
        <ScrollToTop />

        <div className="w-full flex justify-center items-center pb-40 ">
         <div className="w-[90%] space-y-8">
         <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Bounce cascade>
         <SingleRooms 
         img={Gardern}
         title={"Garden Premier"}
         description={"Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view"}
         pic={Group2}

         />
         <SingleRooms
         img={Family} 
         title={"Family Suite"}
         description={"Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family."}
         pic={Group3}/>
         
         <SingleRooms
          img={Govenor}
          title={"Premier Executive"}
          description={"Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
         pic={Group4}/>

<SingleRooms
          img={meeting2}
          title={"Luxury Suite"}
          description={"Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
         pic={Group5}/>

<SingleRooms
          img={Restuarant2}
          title={"Royal Suite"}
          description={"Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
         pic={Group6}/>

<SingleRooms
          img={Swimming2}
          title={"Governor’s Suite"}
          description={"Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
         pic={Group7}/>
        
         </Bounce>
         </div>
         
         </div>
        </div>
        </section>
        <Footer />
       </div>
    )
}
export default Rooms;