import React from 'react';
import Iframe from 'react-iframe';

function map() {
  return (
    <div class='mt-12 mb-12 bg-slate-100'>
        <div class='text-xl mb-2 font-bold px-4 py-2 text-blue-600'>The Stores which is selling the 4X Xpression</div>
        <div class='mb-4 px-6 text-sm text-slate-500'>
            <ul>
                <li>A Store : 5555 NW 3445 Street, Atlant GA 33333</li>
                <li>B Store : 5555 NW 3445 Street, Atlant GA 33333</li>
                <li>C Store : 5555 NW 3445 Street, Atlant GA 33333</li>
                <li>D Store : 5555 NW 3445 Street, Atlant GA 33333</li>
                <li>E Store : 5555 NW 3445 Street, Atlant GA 33333</li>
            </ul>
        </div>
      <div className='border-4 border-slate-300'>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13218.051208748759!2d-83.94266884999999!3d34.082001399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1675274122189!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
      </div>
    </div>
  )
}

export default map