import { motion } from "framer-motion";


export  function AboutCard({image, title}: {image: string, title: string}) {
  return (

    <div className="flex flex-col justify-between shadow rounded-2xl hover:shadow-xl">

        <motion.img
          src={image}
          className="rounded-t-2xl w-full h-[70%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            <h2 className="text-2xl font-bold mb-6 pt-4 text-center">
            {title}
            </h2>
        </motion.div>

    </div>

  )
}