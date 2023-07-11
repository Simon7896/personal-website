'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react";

type PageTransitionProps = {
    children: React.ReactNode;
}

const PageTransition = ({children}: PageTransitionProps) => {

    useEffect(() => { // Temporary fix for page transition exit bug
        window.scrollTo(0, 0)
    }, []);

    return (
        <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)} // This doesn't work at the moment
        >
            <motion.div
                initial={{ opacity:0, y: '50%' }}
                animate={{ opacity:1, y: 0 }}
                exit={{ opacity:0, y: '-50%' }} // This doesn't work at the moment
                transition={{ease: "easeInOut", duration: 0.5}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition;