import '../styles/welcome.css'
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs"

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='padded'>
                <h1 className='big-text'>Hi I'm Mark Ronald, Welcome to my Web Development Portfolio...</h1>
                <p>I'm a freelance web developer with a passion for creating engaging and functional websites. Explore my portfolio to discover a world of innovative web solutions and design excellence.</p>
                <div className='social'>
                    <div className='btn-conatainer'>
                        <a href='https://github.com/mnald12'><BsGithub /></a>
                    </div>
                    <div className='btn-conatainer'>
                        <a href='https://github.com/mnald12'><BsLinkedin /></a>
                    </div>
                    <div className='btn-conatainer'>
                        <a href='https://github.com/mnald12'><BsDiscord /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome