'use client'

import AnimatedSentence from "./animatedSentence"

type TitleBannerProps = {
    name: string;
    bgcolor: string;
}

const TitleBanner = ({name, bgcolor}: TitleBannerProps) => {
    return (
        <div className={`py-64 w-full flex flex-col justify-center ${bgcolor}`}>
            <AnimatedSentence className="text-5xl text-center" text={ name } />
        </div>
    )
}

export default TitleBanner;