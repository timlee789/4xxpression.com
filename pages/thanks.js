import Layout from '../components/layout';
import Registrationform from '../components/registrationform';
import EventHead from '@/components/eventHead';
import EventBody from '@/components/eventBody';
import Map from '../components/map';
import Regulation from '@/components/regulation';


export default function Thanks() {
  return (
    <div class='w-min mx-auto bg-white'>
    <Layout>
      <div className='text-2xl font-bold text-center text-blue-600'>Your Photo is submitted ! </div>
      <EventHead />
     
      <Regulation />
      <Map />
     
      <EventBody />
    </Layout>
   
    </div>
  )
}
