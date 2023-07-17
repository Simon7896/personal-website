'use client'

import AnimatedSentence from "./animatedSentence"

type TitleBannerProps = {
    name: string;
    className: string;
}

const TitleBanner = ({name, className: bgcolor}: TitleBannerProps) => {
    return (
        <div className={`py-52 w-full flex flex-col justify-center ${bgcolor}`}>
            <AnimatedSentence className="text-5xl text-center" text={ name } />
        </div>
    )
}

export default TitleBanner;