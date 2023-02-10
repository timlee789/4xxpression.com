import React from 'react';
import Image from 'next/image';

function eventHead() {
  return (
    <div>
      <div>
         <Image src={'/images/banner-top.jpg'} alt='head' width={1050} height={850} />
      </div>
      <div>
        <Image src={'/images/prizebraid2.jpg'} alt='head' width={600} height={300} className='mb-4' />
        <Image src={'/images/prizeweave2.jpg'} alt='head' width={600} height={300} className='mb-4'/>
        <Image src={'/images/prizeclip2.jpg'} alt='head' width={600} height={300} className='mb-4'/>
      </div>
    </div>
  )
}

export default eventHead