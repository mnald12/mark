import '../styles/home.css'
import me from '../img/me.jpg'
import { useContext } from 'react'
import { Data } from '../Page'
import Goto from '../components/Goto'

const Home = () => {

    const { ref1 } = useContext(Data)

    return (
        <div ref={ref1} id='about'>
            <div className='headline'>
                <div className='headlines'>
                    <h1>About me</h1>
                    <Goto section="ABOUT" />
                </div>
            </div>
            <div className="home">
                <div className="hl">
                    <img src={me} alt='' />
                </div>
                <div className="hr">
                    <h2>HI, I'm Mark Ronald.</h2>
                    <p>I'm a freelance web developer with a passion for creating engaging and functional websites.</p>
                    <p>A dedicated web developer with a strong commitment to delivering exceptional results. With a focus on clean code, responsive design, and user-centric development, I strive to create websites that not only look great but also perform brilliantly.</p>
                    <div className='btns'>
                        <button className='res'>Resume</button>
                        <button className='con'>Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home