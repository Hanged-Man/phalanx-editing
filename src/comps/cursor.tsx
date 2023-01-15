import { useRef, useEffect } from 'react'
import './cursor.css'
import { useEventListener } from '../utils/useEventListener'

function AnimatedCursor() {
    const cursor = useRef(document.createElement('div'))
    const cursorDot = useRef(document.createElement('div'))
    const requestRef = useRef(0)
    const cursorPos = useRef({ x: 0, y: 0 })
    const cursorDotPos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        animate()

        return () => {
            cancelAnimationFrame(requestRef.current)
        }
    }, [])

    useEventListener('mousemove', onMouseMove)

    function onMouseMove(ev: MouseEvent) {
        cursorPos.current.x = ev.clientX
        cursorPos.current.y = ev.clientY
        cursor.current.style.top = `${cursorPos.current.y}px`
        cursor.current.style.left = `${cursorPos.current.x}px`
    }

    function update() {
        const sp = 0.4
        const diffX = cursorPos.current.x - cursorDotPos.current.x
        const diffY = cursorPos.current.y - cursorDotPos.current.y
        cursorDotPos.current.x += easeInOutQuad(sp) * diffX
        cursorDotPos.current.y += easeInOutQuad(sp) * diffY
        cursorDot.current.style.top = `${cursorDotPos.current.y}px`
        cursorDot.current.style.left = `${cursorDotPos.current.x}px`
        function easeInOutQuad(x: number) {
            return x < 0.5 ? 2 * x ** 2 : -1 + (4 + 2 * x) * x
        }
    }

    function animate() {
        update()
        requestRef.current = requestAnimationFrame(animate)
    }
    return (
        <>
            <div ref={cursor} className="cursor"></div>
            <div ref={cursorDot} className="cursor-dot"></div>
        </>
    )
}

export default AnimatedCursor
