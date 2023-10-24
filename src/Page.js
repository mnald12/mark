import { createContext, useState, useRef } from "react"
import BGD from "./components/BGD"
import Contact from "./sections/Contact"
import Home from "./sections/Home"
import Skills from "./sections/Skills"
import Works from "./sections/Works"
import { useIsInViewport } from "./hooks/useIsInViewport"
import Field from "./sections/Field"

const Data = createContext(null)

const Page = () => {

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

    return (
        <Data.Provider value={{ active, setActive, isThunderStorm, setisThunderStorm, ref1, ref2, ref3, ref4, r1, r2, r3, r4 }}>
            <div className="page">
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