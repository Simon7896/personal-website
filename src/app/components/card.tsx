import Link from 'next/link';

type CardGridContainerProps = {
    className?: string;
    children?: React.ReactNode;
}

type CardProps = {
    className?: string;
    href: string;
    title: string;
    desc: string;
    children?: React.ReactNode;
}

const CardGridContainer = ({ className, children }: CardGridContainerProps) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 p-8 bg-slate-100 dark:bg-slate-600 ${className}`}>
            {children}
        </div>
    )
}

const CardBox = ({ className, children }: CardGridContainerProps) => {
    return (
        <div className={`flex flex-col p-4 rounded-lg drop-shadow-lg bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 hover:dark:bg-slate-700 ${className}`}>
            {children}
        </div>
    )
}

const Card = ({ href, title, desc, children }: CardProps) => {
    return (
        <CardBox>
            <Link href={href}>
                <div className="flex flex-col">
                    <p className="my-1 text-2xl font-bold">{title}</p>
                    <p className="my-1 text-lg">{desc}</p>
                </div>
            </Link>
            {children}
        </CardBox>
    )
}

export { CardGridContainer, CardBox, Card };
export default Card;