import location from '../assets/location.svg'
import email from '../assets/email.svg'
import phone from '../assets/phone.svg'
import fb from '../assets/facebook.svg'
import ig from '../assets/instagram.svg'



export function Footer() {
  return (
    <footer className="pt-8 md:pb-8 text-center bg-customGray">

      <div className="container mx-auto flex-col md:flex-row flex justify-between text-lg">

        <div className="px-4 flex flex-col justify-between text-start py-4 md:py-0">
          <h2 className='font-bold mb-6'>Navigate</h2>
          <a href="#">{`>`} Home</a>
          <a href="#services">{`>`} Services</a>
          <a href="#about">{`>`} About</a>
        </div>

        <div className='px-4 text-left py-4 md:py-0'>
          <div className="max-w-800 mx-auto mb-6">
            <h2 className="font-bold mb-6">Get In Touch</h2>
          </div>

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

        <div className='flex flex-col justify-between pt-4 md:py-0'>
          
          <div className='flex px-4 justify-center'>
              <a href="https://www.facebook.com/profile.php?id=61564148927557" className='px-4' target='_blank'>
                <img src={fb} className='max-w-8'/>
              </a>
              
              <a href="https://www.instagram.com/eaa_constructions/" className='px-4' target='_blank'>
                <img src={ig} className='max-w-8'/>
              </a>
          </div>

          <p className="font-bold">© 2026 EAA Constructions. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
