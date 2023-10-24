import { useContext, useEffect } from 'react'
import '../styles/navbar.css'
import { Data } from '../Page'

const Navbar = () => {

    const { active, setActive, r1, r2, r3 } = useContext(Data)

    const scrollTo = (e, id) => {
        setActive(id)
        document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }

    useEffect(() => {
        if (r1) {
            setActive('about')
        }
    }, [r1, setActive])
    useEffect(() => {
        if (r2) {
            setActive('works')
        }
    }, [r2, setActive])
    useEffect(() => {
        if (r3) {
            setActive('contacts')
        }
    }, [r3, setActive])

    return (
        <div className="navbar" id='navbar'>
            <div className="nav-brand">
                <h3>Mark Ronald</h3>
            </div>
            <div className="nav-links">
                <button onClick={(e) => scrollTo(e, 'about')} className={active === 'about' ? 'active' : ''}>About</button>
                <button onClick={(e) => scrollTo(e, 'works')} className={active === 'works' ? 'active' : ''}>Works</button>
                <button onClick={(e) => scrollTo(e, 'contacts')} className={active === 'contacts' ? 'active' : ''}>Contacts</button>
            </div>
        </div>
    )
}

export default Navbar