import Link from "next/link"

type Children = {
    children: React.ReactNode;
}

type CardProps = {
    href: string;
    title: string;
    desc: string;
    img: string;
}

const CardContainer = ({ children }: Children) => {
    return (
        <div className="p-4 rounded-lg drop-shadow-lg bg-slate-800 hover:bg-slate-600">
            { children }
        </div>
    )
}

const Card = ({href, title, desc, img}: CardProps) => {
    return (
        <CardContainer>
            <Link href={ href }>
                <div className="flex flex-col">
                    <div>
                        <img src={ img }/>
                    </div>
                    <h1 className="mt-2 uppercase text-lg font-medium">{ title }</h1>
                    <p className="mt-2 font-medium">{ desc }</p>
                </div>
            </Link>
        </CardContainer>
    )
}

export default function Page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 m-8">
            <Card href="/" title="Test Title" desc="This is a Test Description for the card component which works very well" img="/vercel.svg"/>
            <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/next.svg"/>
            <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/"/>
            <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/"/>
            <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/"/>
            <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/"/>
        </div>
    )
}