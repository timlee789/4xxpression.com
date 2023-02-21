import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function guestGallery(props) {
  return (
    <div className="flex justify-center bg-slate-100 mx-2 my-2 px-4">
        <div className='card h-120 mt-4 ' key={props.id}>
          <Link href={props.imageField} >
            <Image 
                src={props.imageField}
                alt={props.name}
                className='rounded shadow-md w-64 h-80'
                width={350}
                height={800}
            />
            </Link>
            <div className='bg-slate-200 mt-2'>
            <div className='text-center font-bold'>{props.name}</div>
            <div className='text-center'>Intagram @{props.instaid}</div>
            </div>
        </div>
    </div>
  )
}

export default guestGallery