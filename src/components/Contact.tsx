
import location from '../assets/location.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import { ContactCard } from './cards/ContactCard';


export function Contact() {

  
  return (
    <section id="contact" className="container mx-auto flex flex-col md:grid grid-cols-2 justify-between py-24 px-4 text-black scroll-mt-24 bg-customWhite">

      <div  className='text-xl'>
        <h2 className="text-4xl font-bold mb-8 text-black">Contact Us</h2>
        <div className='flex'>
            <img src={location} className='max-w-6 mr-2'/>
            <p>Glendale, CA</p>
          </div>
          <div className='flex'>
            <img src={phone} className='max-w-6 mr-2'/>
            <p>(724) 500-5010</p>
          </div>
          <div className='flex'>
            <img src={email} className='max-w-6 mr-2'/>
            <p>eaaconstructions@yahoo.com</p>
          </div>
      </div>

      <ContactCard />

    </section>
  );
};
