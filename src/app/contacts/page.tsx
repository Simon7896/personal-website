import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

type ContactItemProps = {
    text: string;
    children?: React.ReactNode;
}

const ContactItem = ({ text, children }: ContactItemProps) => {
    return (
        <div className="flex flex-row justify-center p-8">
            <div className="mx-2">
                { children }
            </div>
            <h1 className="mx-2">{text}</h1>
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
                <ContactItem text="simonyu180@gmail.com"><MdEmail/></ContactItem>
                <ContactItem text="www.linkedin.com/in/simon-yu-a9053122b"><FaLinkedin/></ContactItem>
                <ContactItem text="meepmoopz"><FaDiscord/></ContactItem>
                <ContactItem text="https://www.instagram.com/meepmoopz/"><FaInstagram/></ContactItem>
            </div>
            <div className="text-center">
                <div className="p-64 w-full flex flex-col justify-center bg-slate-800">
                    <h1 className="text-4xl text-center">Send A Message</h1>
                    <label className="m-5 flex justify-center text-black">
                        <textarea name="message" rows={10} cols={40} />
                    </label>
                    <div>
                        <button className="p-4 rounded-full bg-slate-500 text-xl">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}