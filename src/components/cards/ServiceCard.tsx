import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type Props = {
    image: string
    title: string,
    description: string
}

export default function ServiceCard({image, title, description}: Props) {
    return (
        <motion.div
            variants={fadeUp}
            className="bg-customWhite rounded-2xl shadow-sm hover:shadow-lg transition h-full text-center"
        >
            <img src={image} className="rounded-t-2xl w-full"/>
            <h3 className="text-xl font-semibold p-4">{title}</h3>
            <p className="text-gray-600 px-4 py-4">
            {description}
            </p>
            <Link to={title}>
                <button className="bg-amber-400 mb-4 px-4 py-2 rounded-lg hover:opacity-80 cursor-pointer">
                    View more
                </button>
            </Link>
        </motion.div>
    )
}