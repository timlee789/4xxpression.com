import Guest from '@/models/Guest';
import db from '@/utils/db'
import React from 'react'
import GuestGallery from '../components/guestGallery';
import Layout from '@/components/layout';
import EventHead from '@/components/eventHead2';
import Link from 'next/link';

function gallery({gallery}) {
   
  return ( 
        <div class='w-auto mx-auto bg-white'>
        <Layout>
        <EventHead/>
       
           
      
         <div className='font-bold text-center text-xl'>Photo Gallery (Feb 20 - Mar 31)</div> 
       
            <div>
            <div className=' flex justify-center flex-wrap '>
                {gallery.map((gues) => (      
                    <div >            
                    <GuestGallery
                        key={gues._id}
                        id={gues._id}
                        name={gues.name}
                        tel={gues.tel}
                        email={gues.email}
                        instaid={gues.instaid}
                        imageField={gues.imageField}
                    /> 
                </div>       
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