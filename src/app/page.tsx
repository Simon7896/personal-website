
const TopBar: React.FunctionComponent = () => {
  return (
    <ul className="flex flex-row justify-evenly w-full">
      <li className="basis-1/6 m-5 p-5">Home</li>
      <li className="basis-1/6 m-5 p-5">Projects</li>
      <li className="basis-1/6 m-5 p-5">About</li>
      <li className="basis-1/6 m-5 p-5">Contacts</li>
    </ul>
  )
}

export default function App() {
  return (
    <main>
      <div className="w-full">
        <TopBar/>
      </div>
    </main>
  )
}
