import emailjs from '@emailjs/browser'
import { createContext, useState, useRef, useEffect } from "react"
import BGD from "./components/BGD"
import Contact from "./sections/Contact"
import Home from "./sections/Home"
import Skills from "./sections/Skills"
import Works from "./sections/Works"
import { useIsInViewport } from "./hooks/useIsInViewport"
import Field from "./sections/Field"

const Data = createContext(null)

const Page = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_manmxhm', 'template_mjdoi5b', form.current, 'W4QLjciGHEj19CYT5')
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error.text)
            }
            )
    }

    const [active, setActive] = useState('about')
    const [isThunderStorm, setisThunderStorm] = useState(false)

    const ref1 = useRef(null)
    const r1 = useIsInViewport(ref1)

    const ref2 = useRef(null)
    const r2 = useIsInViewport(ref2)

    const ref3 = useRef(null)
    const r3 = useIsInViewport(ref3)

    const ref4 = useRef(null)
    const r4 = useIsInViewport(ref4)

    useEffect(() => {
        const htbn = document.getElementById('hbtn')
        htbn.click()
    }, [])

    return (
        <Data.Provider value={{ active, setActive, isThunderStorm, setisThunderStorm, ref1, ref2, ref3, ref4, r1, r2, r3, r4 }}>
            <div className="page">
                <form ref={form} onSubmit={sendEmail} hidden>
                    <input name="user_name" type='text' value={'meportfolio'} />
                    <input name="user_email" type='email' value={'me.mnald12@gmail.com'} />
                    <textarea name="message" value='Hey mark someone visited your portfolio'></textarea>
                    <button id="hbtn" type='submit'>send</button>
                </form>
                <BGD />
                <Home />
                <Skills />
                <Works />
                <Contact />
                <Field />
            </div>
        </Data.Provider>
    )
}

export default Page

export { Data }