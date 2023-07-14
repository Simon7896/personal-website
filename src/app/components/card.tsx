import Link from 'next/link';

type Children = {
    children: React.ReactNode;
}

type CardProps = {
    href: string;
    title: string;
    desc: string;
    children?: React.ReactNode;
}

const CardGridContainer = ({ children }: Children) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 m-8">
            {children}
        </div>
    )
}

const CardBox = ({ children }: Children) => {
    return (
        <div className="flex flex-col p-4 rounded-lg drop-shadow-lg bg-slate-800 hover:bg-slate-600">
            {children}
        </div>
    )
}

const Card = ({ href, title, desc, children }: CardProps) => {
    return (
        <CardBox>
            <Link href={href}>
                <div className="flex flex-col">
                    <h1 className="my-1 text-lg font-medium">{title}</h1>
                    <p className="my-1 font-medium">{desc}</p>
                </div>
            </Link>
            {children}
        </CardBox>
    )
}

export { CardGridContainer, CardBox, Card };
export default Card;