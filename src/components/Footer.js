import React from 'react'
import Logo from '../assets/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{
    return(
        <footer className='p-10 space-y-20 mb-10'>
         <h1 className='text-2xl font-bold text-center'>Feel free to say hello</h1>
         <div className='w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-between gap-15 mt-10'>
         <div className='flex gap-3'>
            <img className='h-12' src={Logo} alt=''/>
            <p className='text-[10px] text-left'>Perched on the edge of the Wikki Hills, Kigamo commands breathtaking views 
                down the valley<br/> that borders the Yankari Game Reserve. Enjoy exclusive game viewing, thrilling 
                night game <br></br>drives, bush dining, amazing Nigerian culture and old-fashioned safari luxury.
            </p>
         </div>

         <div className='text-[10px] grid grid-cols-3 lg:grid-cols-2 gap-6'>
            <div>
            <h4 className='font-bold text-sm'>Address</h4>
            <p> Wikki Camp, Yankari Reserve,<br/> Bauchi</p>
            </div>

            <div>
            <h4 className='font-bold text-sm'>Email</h4>
            <p> hello@kigamo.com</p>
            </div>

            <div className=''>
            <h4 className='font-bold text-sm'>Phone</h4>
            <p>+234 803 102 4720</p>
            </div>
         </div>

         <div className='text-[10px] relative'>
            <h4 className='uppercase text-[10px] font-bold'>About</h4>
            <div className='grid grid-cols-3 gap-10'>
            <div>
                <ul>
                    <li>About</li>
                    <li>Accesibility</li>
                    <li>Awards</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Policies</li>
                    <li>Development</li>
                    <li>Carriers</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>News & Press</li>
                    <li>Videos</li>
                    <li>Covid-19</li>
                </ul>
            </div>
           
         </div>
         <div className='list-none lg:bottom-0 lg:right-0 flex gap-2 py-5'>
         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#3b5998', margin: '10px' }} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#00acee', margin: '10px' }} />
      </a>
      <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366', margin: '10px' }} />
      </a>
            </div>
         </div>
         </div>
        </footer>
    )
}
export default Footer;