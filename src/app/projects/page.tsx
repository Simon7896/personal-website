import Link from "next/link"
import PageTransition from "../components/pageTransition";
import TitleBanner from "../components/titleBanner";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CardGridContainer, Card } from "../components/card";

type ProjectRepo = {
    name: string;
    description: string;
    avatar_url: string;
    html_url: string;
    homepage: string;
    size: string;
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