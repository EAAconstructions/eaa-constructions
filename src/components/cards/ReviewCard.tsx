import stars from '../../assets/stars.svg'
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export  function ReviewCard({customer, text}: {customer: string, text: string}) {
  return (

    <div className="my-5">

        <motion.div
            variants={fadeUp}
            className="h-full bg-customWhite p-8 rounded-2xl shadow-sm hover:shadow-lg transition items-stretch"
        >

            <div>

                <img src={stars} className='w-24'/>
                
                <h3 className="mb-4">
                    {customer}
                </h3>
                
                <p className="lead text-gray-600">
                {text}
                </p>
                
            </div>

        </motion.div>

    </div>

  )
}