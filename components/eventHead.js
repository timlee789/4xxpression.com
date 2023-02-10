import React from 'react';
import Image from 'next/image';

function eventHead() {
  return (
    <div>
      <div>
         <Image src={'/images/banner-top.jpg'} alt='head' width={1050} height={850} />
      </div>
      <div className='flex justify-center'>
        <Image src={'/images/prizebraid.jpg'} alt='head' width={200} height={400} />
        <Image src={'/images/prizeweave.jpg'} alt='head' width={200} height={400} />
        <Image src={'/images/prizeclip.jpg'} alt='head' width={200} height={400} />
      </div>
    </div>
  )
}

export default eventHead