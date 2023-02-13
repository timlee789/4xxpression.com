import Guest from '@/models/Guest';
import db from '@/utils/db'
import React from 'react'
import GuestGallery from '../components/guestGallery';
import Layout from '@/components/layout';
import EventHead from '@/components/eventHead2';

function gallery({gallery}) {
    console.log(gallery)
  return ( 
        <div className='mx-auto'>
        <Layout>
        <EventHead/>
        {/* <div className='font-bold text-'>Photo Gallery</div> */}
        <div >
            <div className='grid grid-cols-2 gap-2 mt-3 md:grid-cols-3 lg:grid-cols-5 ml-1'>
                {gallery.map((gues) => (
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
        </Layout>
        </div>
  )
}

export default gallery

export async function getServerSideProps() {
    await db.connect();
    const guest = await Guest.find().lean();
    return {
        props: {
            gallery: guest.map((guest) => ({
                _id: guest._id.toString(),
                name: guest.name || null,
                tel: guest.tel || null,
                email: guest.email || null,
                instaid: guest.instaid || null,
                imageField: guest.imageField || null, 
            }))
        }
    }
}