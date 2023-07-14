'use client'

import PageTransition from "./components/pageTransition"
import RoundButton from "./components/roundButton";
import { motion } from "framer-motion";
import AnimatedSentence from "./components/animatedSentence";

const LandingPageContainer = ({}) => {
  return (
    <div className="w-screen h-screen flex flex-col-reverse lg:flex-row items-center bg-slate-700">
      <motion.div 
        className="basis-1/2 flex flex-col justify-center items-center"
        animate={{ opacity:1, x: 0 }}
        initial={{ opacity:0, x: '-200%' }}
        transition={{ease: "easeInOut", duration: 1}}
      >
        <div className="m-5 p-8">
          <h2 className="m-2 text-4xl">Hi There! I&apos;m Simon</h2>
          <h3 className="m-2 text-2xl">
            I&apos;m a second-year computing science student at SFU passionate about everything related to tech.
          </h3>
        </div>
        <div className="flex flex-column md:flex-row m-5" justify-center>
          <RoundButton className="bg-slate-500" href="/projects">
            <p className="text-xl">Check Out My Projects</p>
          </RoundButton>
          <RoundButton className="bg-slate-500" href="/contacts">
            <p className="text-xl">Contact Me</p>
          </RoundButton>
        </div>
      </motion.div>
      <div className="basis-1/2 flex justify-center items-center">
        <AnimatedSentence className="text-5xl text-center font-mono" text="$ echo &apos;Welcome!&apos;" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <PageTransition>
      <LandingPageContainer />
    </PageTransition>
  )
}
