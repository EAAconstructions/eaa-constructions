import fb from '../assets/facebook.svg'
import ig from '../assets/instagram.svg'



export function Footer() {
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <footer className="py-8 text-center bg-customGray w-full">

      <div className="container mx-auto flex-col items-center md:flex-row flex justify-between text-lg">

        <div className="px-4 flex flex-col justify-between text-center py-4 md:py-0">
          <h2 className='font-bold mb-6'>Navigate</h2>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('about')}>About</button>
        </div>

        <div className='px-4 text-center py-4 md:py-0'>
          <div className="max-w-800 mx-auto mb-6">
            <h2 className="font-bold mb-6">Get In Touch</h2>
          </div>

          <div className='flex justify-center'>

            <p>Glendale, CA</p>
          </div>
          <div className='flex justify-center'>

            <p>(724) 500-5010</p>
          </div>
          <div className='flex justify-center'>

            <p>eaaconstructions@yahoo.com</p>
          </div>
        </div>

        <div className='flex flex-col md:py-0'>
          
          <div className='flex px-4 justify-center'>
              <a href="https://www.facebook.com/profile.php?id=61564148927557" className='px-2' target='_blank'>
                <img src={fb} className='w-8'/>
              </a>
              
              <a href="https://www.instagram.com/eaa_constructions/" className='px-2' target='_blank'>
                <img src={ig} className='w-8'/>
              </a>
          </div>

          <p className="text-[12px] md:text-lg font-bold pt-4">© 2026 EAA Constructions. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
};
