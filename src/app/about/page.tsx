import PageTransition from "../components/pageTransition";

export default function Page() {
    
    type AboutSectionProps = {
        title: string;
        bgcolor: string;
        bgcolorDark: string;
        children: React.ReactNode;
    }

    const AboutSection = ({title, bgcolor, bgcolorDark, children}: AboutSectionProps) => {        

        return (
            <div className={`m-0 px-64 h-96 w-full flex flex-col justify-center text-justify ${bgcolor} dark:${bgcolorDark}`}>
                <h1 className="p-5 text-4xl text-center">{title}</h1>
                <div className="text-xl">
                    {children}
                </div>            
            </div>
        )
    }

    return (
        <PageTransition>
        <div>
            <AboutSection title="About Me" bgcolor="bg-slate-700" bgcolorDark="bg-slate-700">
                <p>
                    Hello! My name is Simon, and welcome to my website! I am a second year student at Simon Fraser University
                    majoring in Computer Science. 
                </p>
            </AboutSection>
            <AboutSection title="" bgcolor="bg-slate-600" bgcolorDark="bg-slate-600">
                <p>
                    From a young age, I have been captivated by the limitless possibilities that technology brings to our world. 
                    As I entered highschool, my curiosity and fascination for computers and their applications only intensified,
                    and I began to learn about programming and software development.
                    This curiosity eventually led me to pursue a degree in Computer Science at Simon Fraser University.
                </p>
            </AboutSection>
            <AboutSection title="" bgcolor="bg-slate-800" bgcolorDark="bg-slate-800">
                <p>
                    While I deeply enjoy the technical aspects of computer science, I also recognize the importance of its impact on society. 
                    I firmly believe that technology has the power to bring about positive change and improve lives. 
                    Therefore, I am eager to explore the intersection of computer science and social responsibility, 
                    focusing on areas such as ethical AI, data privacy, and digital accessibility.
                </p>
            </AboutSection>
            <AboutSection title="" bgcolor="bg-slate-500" bgcolorDark="bg-slate-500">
                <p>
                    As I continue my academic journey in Computer Science, 
                    I am eagerly seeking internship opportunities that will allow me to further enhance my skills and gain valuable hands-on experience in the industry. 
                    I believe that internships provide a unique opportunity to bridge the gap between theory and practice, 
                    allowing me to apply the knowledge I have gained in a real-world setting. 
                    I am eager to work alongside professionals, learn from their expertise, and contribute to meaningful projects that have a tangible impact. 
                    If you know of any internship opportunities or would like to discuss potential collaborations, 
                    I would be thrilled to hear from you. Let&apos;s connect and explore the possibilities together.
                </p>
            </AboutSection>
            <AboutSection title="" bgcolor="bg-slate-700" bgcolorDark="bg-slate-700">
                <p>
                    Thank you for taking the time to learn more about me. If you would like to connect, collaborate, or have any questions, 
                    please don&apos;t hesitate to reach out. I look forward to connecting with fellow computer science enthusiasts, 
                    mentors, and potential colleagues as I embark on this incredible journey.
                </p>
            </AboutSection>
        </div>
        </PageTransition>
    )
}