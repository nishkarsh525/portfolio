import React, { forwardRef } from 'react'

export const CustomCursor = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="fixed w-8 h-8 rounded-full border-2 border-blue-400 pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',
      }}
    />
  )
})

CustomCursor.displayName = 'CustomCursor'

export default CustomCursor