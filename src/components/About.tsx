import builder from "../assets/builder.jpg"
import diversity from "../assets/diversity.jpg"
import ownership from "../assets/ownership.jpg"
import integrity from "../assets/integrity.jpg"


import { AboutCard } from "./cards/AboutCard";

export function About() {
  return (
    <section id="about" className="py-24 bg-customWhite w-full">

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About</h2>

        <div className="flex flex-col">
          <p className="text-lg py-2">Delivering EXCELLENCE in all we do.</p>

          <p className="text-lg py-2">
            Since its humble beginning in 2020, Edgar Grigoryan has grown as a family of hard-working individuals 
            into a world-class builder. Exploring new markets and partnerships, investing in diversity and our communities,
            and forging new opportunities, we are dedicated to serving our people, our neighbors, our partners and all those
            who aspire to build a better future.
          </p>
          
          <p className="text-lg py-2">
            Eduard Grigoryan is committed to continuing our legacy—not only through brick and mortar landmarks but through the integrity of our team members.
            Through the years, these core values have represented our company as well as each individual that make our projects possible: Ownership, Integrity,
            Builder, Diversity and Community. These values, paired with our ambitious vision and drive to succeed, are what define Edgar Grigoryan and will ensure 
            our continued growth and EXCELLENCE for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 pt-12">
          <AboutCard image={builder} title='BUILDER'/>
          <AboutCard image={diversity} title='DIVERSITY'/>
          <AboutCard image={integrity} title='INTEGRITY'/>
          <AboutCard image={ownership} title='OWNERSHIP'/>

        </div>


      </div>
      
    </section>
  );
};
