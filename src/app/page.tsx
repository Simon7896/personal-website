import Image from 'next/image'

type TopBarProps = {
  bgcolor: string;
  children: React.ReactNode;
}

type TopBarItemProps = {
  name: string;
  onClick(): void;
}

const TopBar: React.FunctionComponent<TopBarProps> = ({
  children, ...props}) => {
    const {bgcolor} = props;

    return (
      <ul>
        {children}
      </ul>
    );
};

const TopBarItem: React.FunctionComponent<TopBarItemProps> = ({
  ...props}) => {
    const {name, onClick} = props;

    return (
      <li>{name}</li>
    )
  }


export default function App() {
  return (
    <main>
      <TopBar bgcolor='white'>
        <TopBarItem name='About' onClick={()=>{}}/>
        <TopBarItem name='Projects' onClick={()=>{}}/>
        <TopBarItem name='Contacts' onClick={()=>{}}/>
      </TopBar>
    </main>
  )
}
