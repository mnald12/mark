import '../styles/skills.css'
import { FaHtml5, FaCss3Alt, FaSquareJs, FaPhp, FaReact, FaVuejs, FaBootstrap, FaNodeJs } from "react-icons/fa6"
import { SiMongodb, SiMysql, SiFirebase, SiWebrtc, SiSocketdotio } from "react-icons/si"

const skills = [
    {
        skill: 'HTML',
        icon: <FaHtml5 className='icn' />,
    },
    {
        skill: 'CSS',
        icon: <FaCss3Alt className='icn' />,
    },
    {
        skill: 'JavaScript',
        icon: <FaSquareJs className='icn' />,
    },
    {
        skill: 'PHP',
        icon: <FaPhp className='icn' />,
    },
    {
        skill: 'React.js',
        icon: <FaReact className='icn' />,
    },
    {
        skill: 'Vue.js',
        icon: <FaVuejs className='icn' />,
    },
    {
        skill: 'Bootstap',
        icon: <FaBootstrap className='icn' />,
    },
    {
        skill: 'Node.js',
        icon: <FaNodeJs className='icn' />,
    },
    {
        skill: 'MongoDB',
        icon: <SiMongodb className='icn' />,
    },
    {
        skill: 'MySQL',
        icon: <SiMysql className='icn' />,
    },
    {
        skill: 'Firebase',
        icon: <SiFirebase className='icn' />,
    },
    {
        skill: 'WebRTC',
        icon: <SiWebrtc className='icn' />,
    },
    {
        skill: 'Socket.io',
        icon: <SiSocketdotio className='icn' />,
    }
]

const Skills = () => {
    return (
        <>
            <div className='headline mneg'>
                <p>Coupled with a comprehensive skill set and years of experience, I am well-prepared to deliver a top-notch website tailored to the unique needs of your business, ensuring it stands out in the digital landscape and effectively communicates your brand's identity and offerings.</p>
            </div>
            <div className="skills">
                {
                    skills.map((skill, id) => (
                        <div className='skill' key={id}>
                            {skill.icon}
                            <small>{skill.skill}</small>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Skills