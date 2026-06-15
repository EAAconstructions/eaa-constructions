import { motion } from "framer-motion";
import ServiceCard from "./cards/ServiceCard";
import plumbing from '../assets/plumbing.png'
import electric from '../assets/electric.png'
import hvac from '../assets/HVAC.png'
import tiling from '../assets/tiling.png'
import paint from '../assets/painting.png'
import drywall from '../assets/drywall.png'


const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Services() {
    return (
        <section id="services" className=" scroll-mt-24 bg-customGray">

                <div className="max-w-800 mx-auto text-center py-4">
                    <h2 className="text-4xl font-bold pt-12">
                        Our Simple 3-Step ADU Process
                    </h2>
                </div>

                    <div className="container  mx-auto px-4 pt-12 pb-24">
                    

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        <ServiceCard 
                            image={plumbing} 
                            title='Plumbing' 
                            description='When it comes to plumbing services, finding a reliable and trustworthy plumber is crucial...'
                        />
                        <ServiceCard 
                            image={electric} 
                            title='Electric' 
                            description='Powering Excellence: EAA Construction Companys Premier Electric Services...'
                        />
                        <ServiceCard 
                            image={hvac} 
                            title='HVAC' 
                            description='"Climate Comfort: EAA Construction Companys Superior HVAC Solutions...'
                        />
                        <ServiceCard 
                            image={tiling} 
                            title='Tiling' 
                            description='Groundbreaking Precision: EAA Construction Companys Premier Tilling Services...'
                        />
                        <ServiceCard 
                            image={paint} 
                            title='Painting' 
                            description='Brushstrokes of Excellence: EAA Construction Companys Premier Paint Services...'
                        />
                        <ServiceCard 
                            image={drywall} 
                            title='Drywall' 
                            description='Seamless Surfaces: EAA Construction Companys Premier Drywall Services'
                        />
                        
                    </motion.div>


                </div>
            

        </section>
    )
    
}