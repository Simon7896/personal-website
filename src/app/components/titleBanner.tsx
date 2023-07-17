'use client'

import AnimatedSentence from "./animatedSentence"

type TitleBannerProps = {
    name: string;
    className: string;
}

const TitleBanner = ({name, className}: TitleBannerProps) => {
    return (
        <div className={`py-52 w-full flex flex-col justify-center ${className}`}>
            <AnimatedSentence className="text-5xl text-center" text={ name } />
        </div>
    )
}

export default TitleBanner;