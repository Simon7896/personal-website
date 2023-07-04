import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import Form from "./form"
import Link from "next/link"

type ContactItemProps = {
    text: string;
    href: string;
    children?: React.ReactNode;
}

const ContactItem = ({ text, href, children }: ContactItemProps) => {
    return (
        <div className="flex flex-row justify-center p-8 hover:underline">
            <div className="mx-2">
                { children }
            </div>
            <Link href={href}>
                <h1 className="mx-2">{text}</h1>
            </Link>
        </div>
    )
}

export default function Page() {
    return (
        <div className="flex flex-col">
            <div className="p-64 w-full flex flex-col justify-center bg-slate-700">
                <h1 className="text-4xl text-center">Contacts</h1>
            </div>
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 text-center text-3xl bg-slate-500">
                <ContactItem href="mailto:simonyu180@gmail.com" text="simonyu180@gmail.com"><MdEmail/></ContactItem>
                <ContactItem text="Linkedin" href="https://www.linkedin.com/in/simon-yu-a9053122b"><FaLinkedin/></ContactItem>
                <ContactItem href="https://discordapp.com/users/337459814995197952" text="Discord"><FaDiscord/></ContactItem>
                <ContactItem text="Instagram" href="https://www.instagram.com/meepmoopz/"><FaInstagram/></ContactItem>
            </div>
            <div className="p-64 w-full flex flex-col justify-center bg-slate-800 text-center">
                <Form></Form>
            </div>
        </div>
    )
}