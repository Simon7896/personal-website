import Link from "next/link"
import PageTransition from "../components/pageTransition";
import TitleBanner from "../components/titleBanner";
import { IconContext } from "react-icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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

async function getRepoData() {
    const res = await fetch('https://api.github.com/users/simon7896/repos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
        }
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

type ProjectRepo = {
    name: string;
    description: string;
    avatar_url: string;
    html_url: string;
    homepage: string;
    size: string;
}

export default async function Page() {
    var projectRepoJson = await getRepoData();

    projectRepoJson = projectRepoJson.sort((a: ProjectRepo, b: ProjectRepo) => {
        if (a.size > b.size) { // Sort by size
            return -1;
        }
    });

    return (
        <PageTransition>
            <div className="block">
                <TitleBanner name="Projects" bgcolor="bg-slate-700"></TitleBanner>
                <CardGridContainer>
                { projectRepoJson.map((repo: ProjectRepo) => {
                    return (
                        <Card href={repo.html_url} title={repo.name.replaceAll('-', ' ')} desc={repo.description}>
                            <div className="my-2 flex flex-row">
                                <Link href={repo.html_url} className=""><FaGithub size={28}/></Link>
                                { repo.homepage === null || repo.homepage === '' ? null : 
                                    <Link href={repo.homepage}>
                                        <FaExternalLinkAlt size={28}/>
                                    </Link>
                                }
                            </div>
                        </Card>
                    )    
                })}
                </CardGridContainer>
            </div>
        </PageTransition>
    )
}