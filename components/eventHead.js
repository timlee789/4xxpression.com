import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

function eventHead() {
  return (
    <div>
      <div>
         <Image src={'/images/banner-top.jpg'} alt='head' width={1050} height={850} />
      </div>
      <div className='text-2xl text-center text-slate-500 font-bold'>Rachel Introduce the Event </div>
      <div className='bg-slate-200 mb-4 py-4'>
        
          <ReactPlayer url='/images/haireventintro.mp4' playing='true' width={600} controls='true' />
       
       
      </div>
      <div>
        <Image src={'/images/prizebraid2.jpg'} alt='head' width={600} height={300} className='mb-4' />
        <Image src={'/images/prizeweave2.jpg'} alt='head' width={600} height={300} className='mb-4'/>
        <Image src={'/images/prizeclip2.jpg'} alt='head' width={600} height={300} className='mb-4'/>
        <div className='font-bold text-green-400'>Check bellow to see the Prize Product Details </div>
      </div>
    </div>
  )
}

export default eventHead