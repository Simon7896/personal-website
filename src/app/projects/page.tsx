import Link from "next/link"
import Image from "next/image";
import PageTransition from "../components/pageTransition";
import TitleBanner from "../components/titleBanner";

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
                        <Image src={img} width="500" height="500" alt="Project Logo"/>
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
        <PageTransition>
            <div className="block">
                <TitleBanner name="Projects" bgcolor="bg-slate-700"></TitleBanner>
                <CardGridContainer>
                    <Card href="/" title="Test Title" desc="This is a Test Description for the card component which works very well" img="/vercel.svg" />
                </CardGridContainer>
            </div>
        </PageTransition>
    )
}