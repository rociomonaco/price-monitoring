import React from 'react'

export const List = ({ width = 24, height = 24, fill = '#374957' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox={`0 0 24 24`}
    >
      <g clipPath='url(#a)'>
        <path
          fill={fill}
          d='M7 6h16a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2Zm16 5H7a1 1 0 1 0 0 2h16a1 1 0 0 0 0-2Zm0 7H7a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2ZM2 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
