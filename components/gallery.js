import Guest from '../models/Guest';
import db from '@/utils/db'
import React from 'react'
import GuestGallery from './guestGallery';

function gallery({gallery}) {
    console.log(gallery)
  return ( 
        <div className='flex justify-center card'>ehey
            <div class='grid grid-cols-1 gap-4 mt-10 md:grid-cols-3 lg:grid-cols-5 ml-7'>
                {gallery2.map((gues) => (
                    <GuestGallery
                        key={gues._id}
                        id={gues._id}
                        name={gues.name}
                        tel={gues.tel}
                        email={gues.email}
                        instaid={gues.instaid}
                        imageField={gues.imageField}
                    />
                ))}
            </div>

        </div>
  )
}

export default gallery

export async function getServerSideProps() {
    await db.connect();
    const guest = await Guest.find().sort({name: 1}).lean();
    return {
        props: {
            gallery: guest.map((guest) => ({
                _id: guest._id.toString(),
                name: guest.name || null,
                tel: guest.tel || null,
                email: guest.email || null,
                instaid: guest.instaid || null,
                imageField: guest.imageFiled || null, 
            }))
        }
    }
}