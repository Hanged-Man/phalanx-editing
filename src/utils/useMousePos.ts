import React, { useState, useEffect } from 'react'

function useMousePosition() {
    const [pos, setPos] = useState({
        mouseX: 0,
        mouseY: 0,
    })

    useEffect(() => {
        const setFromEvent = (ev: any) =>
            setPos({ mouseX: ev.clientX, mouseY: ev.clientY })
        document.addEventListener('mousemove', setFromEvent, false)
        document.addEventListener('mouseenter', setFromEvent, false)

        return () => {
            document.removeEventListener('mousemove', setFromEvent)
            document.removeEventListener('mouseenter', setFromEvent)
        }
    }, [])

    return pos
}

export default useMousePosition
