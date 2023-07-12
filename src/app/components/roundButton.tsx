import Link from "next/link";

type RoundButtonProps = {
    className?: string;
    href: string;
    children?: React.ReactNode;
}

const RoundButton = ({className, href, children}: RoundButtonProps) => {
    return (
        <Link href={ href } className={`flex flex-row justify-center ease-in-out duration-300 p-3 m-5 rounded-full hover:scale-110 ${className}`}>
            { children }
        </Link>
    )
}

export default RoundButton;