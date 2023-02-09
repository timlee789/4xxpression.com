import Layout from '../components/layout';
import Registrationform from '../components/registrationform';
import EventHead from '@/components/eventHead';
import EventBody from '@/components/eventBody';
import Map from '../components/map';
import Regulation from '@/components/regulation';

export default function Home() {
  return (
    <div class='w-min mx-auto bg-white'>
    <Layout>
      <EventHead />
      <Registrationform/>
      <Regulation />
      <Map />
      <EventBody />
    </Layout>
   
    </div>
  )
}
