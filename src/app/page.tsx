import Link from "next/link"
import {MdArrowForward} from "react-icons/md"

type SectionProps = {
  bgcolor: string;
  title?: string;
  children: React.ReactNode;
}

const SectionBox = ({ bgcolor, children }: SectionProps) => {
  return (
    <div className={"grow w-full py-64 self-center flex flex-col justify-center " + bgcolor}>
        { children }
    </div>
  )
}

const Section = ({ bgcolor, title, children}: SectionProps) => {
  return (
    <SectionBox bgcolor={ bgcolor }>
      <h1 className="text-4xl text-center">{ title }</h1>
      { children }
    </SectionBox>
  )
}

type RoundArrowTextButtonProps = {
  href: string;
  text: string;
}

const RoundArrowTextButton = ({ href, text }: RoundArrowTextButtonProps) => {
  return (
    <Link href={ href } className="flex flex-row self-center justify-center items-center p-3 m-5 rounded-full bg-slate-700 hover:bg-slate-600">
      <p className="text-2xl text-center mx-2">{ text }</p>
      <MdArrowForward/>
    </Link>
  )
}

export default function App() {
  return (
    <div className="flex flex-col items-stretch space-evenly w-full h-fit">
      <Section bgcolor="bg-slate-700" title="Welcome!">
      </Section>
      <Section bgcolor="bg-slate-800" title="Check Out My Projects!">
        <RoundArrowTextButton href="/projects" text="Projects"/>
      </Section>
      <Section bgcolor="bg-slate-500" title="Contact Me!">
        <RoundArrowTextButton href="/contacts" text="Contacts"/>
      </Section>
    </div>
  )
}
