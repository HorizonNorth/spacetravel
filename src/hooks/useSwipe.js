import { useState } from "react"

export default function useSwipe(index, setIndex, data) {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const minSwipeDistance =100 
    
    const onTouchStart = (e) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX)
    }
    
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      if (isRightSwipe && (index > 0)) setIndex(index => index - 1);
      if (isLeftSwipe && (index < data - 1)) setIndex(index => index + 1)
    }
    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    }
}