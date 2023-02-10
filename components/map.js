import React from 'react';
import Iframe from 'react-iframe';

function map() {
  return (
    <div class='mt-12 mb-12 '>
        <div class='text-xl mb-2 font-bold px-4 py-2 text-blue-600'>The Stores which is selling the 4X Xpression</div>
        
      <div className='border-4 border-slate-300'>
        {/* <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13218.051208748759!2d-83.94266884999999!3d34.082001399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1675274122189!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/> */}
        <Iframe url="https://www.google.com/maps/d/embed?mid=1fZEvEu52NjbRJre_YT8jegO5Jl8-G6w&ehbc=2E312F" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1fZEvEu52NjbRJre_YT8jegO5Jl8-G6w&ehbc=2E312F" width="640" height="480"></iframe> */}
        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1fZEvEu52NjbRJre_YT8jegO5Jl8-G6w&ehbc=2E312F" width="640" height="480"></iframe> */}
      </div>
      <div class='mt-4 px-6 text-sm text-slate-400'>
            <ul className='font-bold'>
                <li>ANNA BEAUTY : 832 Spur 138 Jonesboro GA 30236</li>
                <li >BEAUTY 7 MART : 632 Thornton Rd Lithia Springs GA 30122</li>
                <li>BEAUTY FOR LESS : 3277 Buford HWY #625 Brookheaven GA 30329</li>
                <li>BEAUTY NOW :  4450 Nelson brogdon Blvd Buford GA 30518</li>
                <li>BEAUTY TOWN HUDSON : 1763 Hudson Bridge RD Stockbridge GA 30281</li>
                <li>FANTASTIC BEAUTY SUPPLY : 3615 Flakes Mill RD. Decatur GA 30034</li>
                <li>MIN'S BEAUTY : 4919 Flat Shoals Pkwy #104 Decatur GA 30034</li>
                <li>FEEL THE BEAUTY : 1772 Jonesboro Road suite 200 B McDonough GA 30253</li>
                <li>HAIR CROWN & WIG : 3441 memorial Dr Decatur GA 30032</li>
                <li>LUX BEAUTY SUPPLY : 4044 Atlanta Hwy suite #816 Loganville GA 30052</li>
                <li>JC BEAUTY : 4847 Jonesboro Rd. Forest Park GA 30297</li>
                <li>SO GOOD BRIDAL & BEAUTY : 3480 Steve Reynolds Blvd. Duluth GA 30096</li>
                <li>SUNNY BEAUTY SUPPLY : 1426 Dogwood Dr. Conyers GA 30013</li>
                <li>THE FASHION : 93 Temple Ave Newnan GA 30263</li>
            </ul>
        </div>
    </div>
  )
}

export default map