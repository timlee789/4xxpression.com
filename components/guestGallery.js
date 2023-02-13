import React from 'react';
import Image from 'next/image';

function guestGallery(props) {
  return (
    <div>
        <div className='card mt-5 h-96' key={props.id}>
            <Image
                src={props.imageField}
                alt={props.name}
                className='rounded shadow-md w-64 h-80 my-2'
                width={350}
                height={800}
            />
            <div className='bg-slate-200'>
            <div className='text-center font-bold'>{props.name}</div>
            <div className='text-center'>Intagram @{props.instaid}</div>
            </div>
        </div>
    </div>
  )
}

export default guestGallery