import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function eventHead() {
  return (
    <div className='flex justify-center'>
      <div>
         <Image src={'/images/banner-top.jpg'} alt='head' width={750} height={550} />
      </div>
     
     
    </div>
  )
}

export default eventHead