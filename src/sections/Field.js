import '../styles/field.css'
import { useContext, useEffect } from "react"
import { Data } from "../Page"
import mountain from "../img/mountain.png"
import { AiOutlineArrowUp } from "react-icons/ai"

const Field = () => {
    const { setisThunderStorm, ref4, r4 } = useContext(Data)

    useEffect(() => {
        if (r4) {
            setisThunderStorm(true)
        }
        else {
            setisThunderStorm(false)
        }
    }, [r4, setisThunderStorm])

    const scrollTo = (id, block) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: block, inline: 'nearest' })
    }

    return (
        <div className="field" id="field" ref={ref4}>
            <img className={r4 ? 'dblock' : 'dnone'} src={mountain} alt="mountain" />
            <div className={r4 ? 'd-flex content' : 'd-none content'}>
                <div className="content-left">
                    <p>"Success is like a lightning bolt. It'll strike you when you least expect it, and you just have to keep the momentum going. You have to strike when the iron is hot. So for me, I just kept striking and striking to polish out the sword that I was making."</p>
                    <small>-- Michelle Phan</small>
                </div>
                <div className="content-right">
                    <button onClick={() => scrollTo('contacts', 'start')}><AiOutlineArrowUp /></button>
                </div>
            </div>
        </div>
    )

}

export default Field