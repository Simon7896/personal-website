type TitleBannerProps = {
    name: string;
    bgcolor: string;
}

const TitleBanner = ({name, bgcolor}: TitleBannerProps) => {
    return (
        <div className={`py-64 w-full flex flex-col justify-center ${bgcolor}`}>
            <h1 className="text-4xl text-center">{ name }</h1>
        </div>
    )
}

export default TitleBanner;