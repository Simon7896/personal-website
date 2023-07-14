'use client'

import { motion } from 'framer-motion'

type AnimatedSentenceProps = {
    className?: string;
    text: string;
}

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.07,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const AnimatedSentence = ({className, text}: AnimatedSentenceProps) => {
    return (
        <motion.p
            className={className}
            variants={ sentence }
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => {
                return (
                    <motion.span key={char + "-" + index} variants={letter}>
                        { char }
                    </motion.span>
                )
            })}
        </motion.p>
    )
};

export default AnimatedSentence;