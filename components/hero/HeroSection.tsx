'use client'
import React, { useRef } from 'react'
import ParticlesContainer from './ParticlesContainer'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'


const HeroSection = () => {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress} = useScroll({
        target: ref,
        offset: ["1 0" ,"1 1"]
    })

    // const [isLoaded, setIsLoaded] = React.useState(false);

    // const toggleLoad = () => {
    //     setIsLoaded(!isLoaded);
    // };


    const sacleProgress = useTransform(scrollYProgress, [1 , 0], [1, 0.25])
    const opacityProgress = useTransform(scrollYProgress, [1 , 0], [1, 0])


  return (
    // <Skeleton isLoaded={isLoaded} className="rounded-lg">
        <motion.section 
            ref={ref} 
            style={{
                scale: sacleProgress,
                opacity: opacityProgress
            }}
            className='  flex min-h-screen flex-col gap-8 items-center justify-center '>
            
                <div className='z-50 '>
                    <h1 className='mx-8 text-4xl lg:text-5xl lg:w-8/12 text-center z-50'>
                    Unlock AI-Powered Business Breakthroughs
                    </h1>

                    <h3>
                    Revitalize old systems with Desync.ai, forge a standout position with AI-driven integrations that supercharge your business growth.
                    </h3>
                </div>

                {/* <div className='z-50'>
                    <FormsparkEmailCapture />
                </div> */}

                <ParticlesContainer />

        </motion.section>
    // </Skeleton>
  )
}

export default HeroSection
