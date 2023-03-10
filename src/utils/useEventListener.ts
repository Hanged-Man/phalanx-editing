import { useRef, useEffect } from 'react'
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * useEventListener
 * Hook for handling EventListeners
 * @return {object} width, height
 */
export function useEventListener<K extends keyof WindowEventMap>(
    eventName: K,
    handler: (event: WindowEventMap[K]) => void,
    element = window
) {
    // Create a ref that stores handler
    const savedHandler = useRef(handler)

    // Update ref.current value if handler changes.
    useEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(
        () => {
            // Make sure element supports addEventListener
            const isSupported = element && element.addEventListener
            if (!isSupported) return

            // Create event listener that calls handler function stored in ref
            const eventListener: typeof handler = (event) =>
                savedHandler.current(event)

            // Add event listener
            element.addEventListener(eventName, eventListener)

            // Remove event listener on cleanup
            return () => {
                element.removeEventListener(eventName, eventListener)
            }
        },
        [eventName, element] // Re-run if eventName or element changes
    )
}
