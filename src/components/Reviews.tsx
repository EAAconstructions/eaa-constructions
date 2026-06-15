import { ReviewCard } from "./cards/ReviewCard";
import { motion } from "framer-motion";


const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Reviews() {
  return (
    <section className="w-full mx-auto py-24 bg-customGray">

        <div className="container mx-auto px-4">

            <div className="max-w-800 mx-auto text-center mb-6">
                <h2 className="text-4xl font-bold mb-6">What Our Clients Are Saying</h2>
            </div>

            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-10"
            >


                    <ReviewCard 
                        customer="MaiSon Flowers LA - Burbank"
                        text="We had a TERRIFIC experience with Eduard. He was efficient, communicative and provided us with great blueprints for our new construction... Highly recommend working with them."
                    />


                    <ReviewCard 
                        customer="Artur - Glendale"
                        text="EAA Constructions did an incredible job on our ADU project. Davit was professional, responsive, and made sure everything stayed on track from start to finish. The team handled the construction, plumbing, and electrical work with great attention to detail, and the final result turned out even better than we expected. Highly recommend!"
                    />
 


                    <ReviewCard
                        customer="David - North Hollywood"
                        text="Our experience with EAA Constructions was outstanding from beginning to end. The team was punctual, organized, and easy to communicate with throughout the project. They handled our plumbing, electrical, and ADU construction professionally, and the quality of the work was top-notch. We’re extremely happy with how everything turned out and would definitely recommend them to others."
                    />


            </motion.div>

        </div>

    </section>
  )
}