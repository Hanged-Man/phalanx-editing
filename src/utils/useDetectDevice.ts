import { useEffect, useState } from 'react'

function useDetectDevice() {
    const [isMobile, setMobile] = useState(false)
    useEffect(() => {
        const userAgent: string =
            typeof navigator === 'undefined' ? '' : navigator.userAgent
        const mobile: boolean = Boolean(
            userAgent.match(
                /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|WPDesktop/i
            )
        )
        setMobile(mobile)
    }, [])

    return { isMobile }
}

export default useDetectDevice
