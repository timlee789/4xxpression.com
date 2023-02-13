import React from 'react';
import Image from 'next/image';

function eventHead() {
  return (
    <div>
      <div>
         <Image src={'/images/banner-top.jpg'} alt='head' width={1050} height={850} />
      </div>
     
    </div>
  )
}

export default eventHead