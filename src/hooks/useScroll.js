import { useState, useEffect } from 'react'

/**
 * useScroll - returns current window.scrollY value
 * Updates on scroll, cleaned up on unmount
 */
function useScroll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export default useScroll
