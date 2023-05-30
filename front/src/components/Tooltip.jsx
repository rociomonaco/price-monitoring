import { useEffect, useRef, useState } from 'react'

export const Tooltip = ({ children, text, position = 'tooltip-top' }) => {
  const [tooltipPosition, setTooltipPosition] = useState(position)
  const triggerRef = useRef(null)

  useEffect(() => {
    const triggerCurrent = triggerRef.current
    const handleOnMouseEnter = () => {
      const tooltip = triggerCurrent.children[1].getBoundingClientRect()
      const changePosition = changePositionTooltip(tooltip, window)
      changePosition && setTooltipPosition(changePosition)
    }

    triggerCurrent.addEventListener('mouseover', handleOnMouseEnter)
    return () => {
      triggerCurrent.removeEventListener('mouseover', handleOnMouseEnter)
    }
  }, [])

  const changePositionTooltip = (element, window) => {
    switch (true) {
      case element.bottom > window.innerHeight:
        return 'tooltip-top'
      case element.right > window.innerWidth:
        return 'tooltip-left'
      case element.top < 0:
        return 'tooltip-bottom'
      case element.left < 0:
        return 'tooltip-right'
      default:
        return false
    }
  }

  return (
    <div>
      <div className='group relative inline-block' ref={triggerRef}>
        {children}
        <div
          className={`max-w-[200px] w-64 p-2 hidden group-hover:block transition-all absolute bg-white shadow-md z-10 rounded-md ${tooltipPosition}`}
        >
          <p className='text-xs text-gray-500 overflow-auto'>{text}</p>
          <div className='tooltip-arrow' />
        </div>
      </div>
    </div>
  )
}
