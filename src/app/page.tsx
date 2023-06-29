import Link from "next/link"
import {MdArrowForward} from "react-icons/md"

export default function App() {
  return (
    <div className="flex flex-col items-stretch space-evenly w-full h-screen">
      <div className="basis-1/2 w-full self-center flex flex-col justify-center bg-slate-700">
        <h1 className="text-4xl text-center">Welcome!</h1>
        <h2 className="text-2xl text-center">I Hope You Have A Nice Day!</h2>
      </div>
      <div className="basis-1/2 w-full self-center flex flex-col justify-center bg-slate-800">
        <h1 className="text-4xl text-center m-5">Check Out My Projects!</h1>
        <Link href="/projects" className="flex flex-row self-center justify-center items-center p-3 m-5 rounded-full bg-slate-700 hover:bg-slate-600">
          <p className="text-2xl text-center mx-2">Projects </p>
          <MdArrowForward/>
        </Link>
      </div>
    </div>
  )
}
