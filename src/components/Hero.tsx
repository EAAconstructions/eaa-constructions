import hero from '../assets/hero.gif'
import { motion } from 'framer-motion'

export function Hero() {
    return (
        <>
            <main id='home' className="relative w-full">
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        src={hero}
                        alt='Construction Hero Photo'
                        className='h-screen w-full'
                    />
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='absolute top-0 h-screen w-full text-center lg:text-start'
                    >
                        <div className='w-full bg-black/80 h-screen' >
                            <h2 
                                className='container px-4 absolute top-[30%] lg:top-[40%] left-[50%] translate-[-50%] text-4xl xl:text-8xl font-bold text-amber-400'
                            >
                                Building a Stronger California
                            </h2>
                            <p 
                                className='container px-4 absolute top-[60%] left-[50%] translate-[-50%] text-lg xl:text-4xl text-amber-500'
                            >
                                Build, remodel, and upgrade with one trusted team for every part of your project — from electrical and plumbing to complete custom home construction.
                                We deliver high-quality craftsmanship, reliable service, and start-to-finish project management designed to bring your vision to life.
                            </p>
                        </div>
                    </motion.div>
            </main>
        </>
    )
}

