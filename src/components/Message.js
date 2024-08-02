import React from 'react'
import Picture from '../assets/images/Picture.png'
import Signature from '../assets/images/Signature.png'
import { Slide } from 'react-awesome-reveal'

const Message = () =>{
    return(
        <div className='space-y-10'>
            <Slide direction="left">
            <h2 className='font-bold text-2xl text-center'>A message from the Manager</h2>
            <div className='flex flex-col md:flex-row w-full gap-20 px-10'>
                <img className=' w-full md:w-2/6 h-60 ' src={Picture} alt=''/>
                <div className='w-full md:w-3/6 space-y-4'>
                    <p>Kigoma sits in a unique position of being able to offer our guests the very best
                         of<br/> Africa. From generous hospitality and refined service, to exceptional experiences<br/>
                          and the most beautiful African animals in existence.
                    </p>
                    <p>Everyday, we aim to fulfill our purpose: "We love what we do. We believe in<br/> changing
                         people's lives and find our own value in their experience."
                    </p>
                    <p>Allow the Kigoma family to curate your visit to our beautiful grounds.</p>
                    <p>Miebaka Joshua</p>
                    <img src={Signature} alt=''/>
                </div>
            </div>
            </Slide>
        </div>
    )
}
export default Message;