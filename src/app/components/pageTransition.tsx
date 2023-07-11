'use client'

import { AnimatePresence, motion } from "framer-motion"

type PageTransitionProps = {
    children: React.ReactNode;
}

const PageTransition = ({children}: PageTransitionProps) => {
    return (
        <AnimatePresence
            mode="popLayout"
        >
            <motion.div
                initial={{ opacity:0, y: '50%' }}
                animate={{ opacity:1, y: 0 }}
                transition={{ease: "easeInOut", duration: 0.5}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition;