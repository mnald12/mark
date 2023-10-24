import { useContext } from 'react'
import '../styles/works.css'
import { Data } from '../Page'
import Goto from '../components/Goto'
const works = [
    {
        workName: 'Lightning Strike Animation',
        type: 'Codepen',
        vid: 'lightning.mp4',
        link: 'https://codepen.io/mnald12/pen/RwvbvLq',
        description: ''
    },
    {
        workName: 'JG Crystal King',
        type: 'Company Website',
        img: 'jgcrystalking.png',
        link: 'https://jgcrystalking.com/',
        description: ''
    },
    {
        workName: 'TANG ELEVEN',
        type: 'Web Based Store Management System',
        img: 'tangeleven.png',
        link: null,
        description: ''
    },
    {
        workName: 'AMATEL',
        type: 'Website and Managemenet System | Capstone',
        img: 'amatel.png',
        link: null,
        description: ''
    },
    {
        workName: 'TESDA',
        type: 'Website and Managemenet System | Capstone',
        img: 'tesda.png',
        link: null,
        description: ''
    },
    {
        workName: 'Light Plumbing',
        type: 'Personal Project',
        img: 'lightplumbing.png',
        link: 'https://lightplumbing.netlify.app/',
        description: ''
    },
    {
        workName: 'Grandomizer',
        type: 'Personal Project | CSS Tool',
        img: 'grandomizer.png',
        link: 'https://grandomizer.netlify.app/',
        description: ''
    },
    {
        workName: 'Mailenger',
        type: 'Email into chat app with video and audio call | Paid Training',
        img: 'mailenger.png',
        link: null,
        description: ''
    },
    {
        workName: '(CEMS) Covid-19 Expense Management System',
        type: 'Web Based Management System | Capstone',
        img: 'cems.png',
        link: null,
        description: ''
    },
    {
        workName: '(BMS) Barangay Management System',
        type: 'Web Based Management System | Capstone',
        img: 'bms.png',
        link: null,
        description: ''
    },
]

const Works = () => {

    const { ref2 } = useContext(Data)

    return (
        <div ref={ref2} id='works'>
            <div className='headline'>
                <div className='headlines'>
                    <h1>Explore My Works</h1>
                    <Goto section={'WORKS'} />
                </div>
                <p>Backed by an extensive portfolio of my previous projects, I have a proven track record of successfully delivering outstanding results. Each of these works reflects my dedication to excellence, and I am confident in my ability to provide you with the same level of quality and commitment for your upcoming project.</p>
            </div>
            <div className="works">
                {
                    works.map((work, id) => (
                        <div className='work' key={id}>
                            {work.type === 'Codepen' ? <video autoPlay muted loop><source src={require(`../img/proj/${work.vid}`)} type="video/mp4" /></video> : <img src={require(`../img/proj/${work.img}`)} alt='' />}
                            <div className='content'>
                                <h3>{work.workName}</h3>
                                <small>{work.type}</small>
                                {work.link ? <a href={work.link} target="_blank" rel="noopener noreferrer">Visit</a> : <div className='off'>Offline</div>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Works