import { useContext, useEffect } from "react"
import { Data } from "../Page"

const BGD = () => {

    const { isThunderStorm } = useContext(Data)

    useEffect(() => {

        const canvas = document.getElementById('canvas')
        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight
        const ctx = canvas.getContext('2d')

        const LEFT = 'LEFT'
        const RIGHT = 'RIGHT'

        const getDir = () => {
            const dec = Math.floor(Math.random() * 30)
            if (dec < 16) return LEFT
            else return RIGHT
        }


        class Cloud {
            constructor(x, y) {
                this.x = x
                this.y = y
                this.size = Math.floor(Math.random() * 30) + 10
                this.clr = 'silver'
                this.dir = getDir()
                this.speed = Math.floor(Math.random() * 2) + 1
            }
            moveLeft() {
                this.x -= this.speed
            }
            moveRight() {
                this.x += this.speed
            }
            update() {

                if (this.x <= 0) { this.dir = RIGHT }
                else if (this.x >= canvas.width) { this.dir = LEFT }

                if (this.dir === LEFT) { this.moveLeft() }
                else { this.moveRight() }

            }
            drawRoot(x, y) {
                let sx = x,
                    sy = y,
                    ex = sx + Math.floor(Math.random() * 50) - 15,
                    ey = sy + Math.floor(Math.random() * 30)
                let i = 0,
                    limit = Math.floor(Math.random() * 20)
                while (i < limit) {
                    ctx.beginPath()
                    ctx.strokeStyle = 'aliceblue'
                    ctx.lineWidth = 2
                    ctx.moveTo(sx, sy)
                    ctx.lineTo(ex, ey)
                    ctx.stroke()
                    sx = ex
                    sy = ey
                    ex = sx + Math.floor(Math.random() * 50) - 15
                    ey = sy + Math.floor(Math.random() * 30)
                    i++
                }
            }
            drawLightning() {

                let sx = this.x,
                    sy = this.y,
                    ex = sx + Math.floor(Math.random() * 30) - 15,
                    ey = sy + Math.floor(Math.random() * 30)

                let i = 0,
                    limit = Math.floor(Math.random() * 20) + 10

                while (i < limit) {
                    ctx.beginPath()
                    ctx.strokeStyle = 'aliceblue'
                    ctx.lineWidth = 3
                    ctx.moveTo(sx, sy)
                    ctx.lineTo(ex, ey)
                    ctx.stroke()
                    sx = ex
                    sy = ey
                    ex = sx + Math.floor(Math.random() * 30) - 15
                    ey = sy + Math.floor(Math.random() * 30)
                    let root = Math.floor(Math.random() * 1000)
                    if (root < 100) {
                        this.drawRoot(sx, sy)
                    }
                    i++
                }

            }
            draw() {


                const strike = Math.floor(Math.random() * 1000000)

                if (isThunderStorm) {
                    if (strike < 1000) {
                        this.drawLightning()
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
                        ctx.fillRect(0, 0, canvas.width, canvas.height)
                    }
                }
                else {
                    if (strike < 100) {
                        this.drawLightning()
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
                        ctx.fillRect(0, 0, canvas.width, canvas.height)
                    }
                }
            }
        }

        const clouds = []

        let i = 0

        while (i < canvas.width) {
            clouds.push(new Cloud(i, 0))
            i += Math.floor(Math.random() * 20) + 1
        }

        let lastTime = 0
        const fps = 60
        const nextFrame = 1000 / fps
        let timer = 0

        const animate = (timeStamp) => {

            const deltaTime = timeStamp - lastTime
            lastTime = timeStamp

            if (timer > nextFrame) {

                ctx.shadowColor = "white"
                ctx.shadowBlur = 10

                if (isThunderStorm) {
                    ctx.fillStyle = '#0a0a0a';
                }
                else {
                    ctx.fillStyle = '#3e3e3e';
                }

                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for (let c of clouds) {
                    c.draw()
                    c.update()
                }
            }
            else {
                timer += deltaTime
            }

            requestAnimationFrame(animate)

        }

        animate(0)

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })

    }, [isThunderStorm])

    return <canvas id="canvas"></canvas>
}

export default BGD