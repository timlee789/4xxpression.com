import React from 'react';
import Image from 'next/image';

function guestGallery(props) {
  return (
    <div>
        <div className='card mt-5 h-96' key={props.id}>
            <Image
                src={props.imageField}
                alt={props.name}
                className='rounded shadow-md'
                width={350}
                height={800}
            />
            <div>{props.name}</div>
            <div>{props.instaid}</div>
        </div>
    </div>
  )
}

export default guestGallery