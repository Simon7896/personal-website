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

const CardGridContainer = ({ children }: Children) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 m-8">
            {children}
        </div>
    )
}

const CardBox = ({ children }: Children) => {
    return (
        <div className="p-4 rounded-lg drop-shadow-lg bg-slate-800 hover:bg-slate-600">
            {children}
        </div>
    )
}

const Card = ({ href, title, desc, img }: CardProps) => {
    return (
        <CardBox>
            <Link href={href}>
                <div className="flex flex-col">
                    <div>
                        <img src={img} />
                    </div>
                    <h1 className="mt-2 uppercase text-lg font-medium">{title}</h1>
                    <p className="mt-2 font-medium">{desc}</p>
                </div>
            </Link>
        </CardBox>
    )
}

export default function Page() {
    return (
        <div className="block">
            <div className="p-32 w-full flex flex-col justify-center bg-slate-700">
                <h1 className="text-4xl text-center">Projects</h1>
                <h2 className="text-2xl text-center"></h2>
            </div>
            <div className="">
                <CardGridContainer>
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component which works very well" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component" img="/vercel.svg" />
                </CardGridContainer>
            </div>
        </div>
    )
}