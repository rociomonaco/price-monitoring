import React from 'react'

export const Home = ({ width = 24, height = 24, fill = '#374957' }) => {
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
          d='m23.121 9.069-7.585-7.586a5.008 5.008 0 0 0-7.072 0L.88 9.069a2.978 2.978 0 0 0-.88 2.12v9.818a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V11.19a2.976 2.976 0 0 0-.879-2.121Zm-8.12 12.938H9v-3.934a3 3 0 0 1 6 0v3.934Zm7-1a1 1 0 0 1-1 1h-4v-3.934a5 5 0 0 0-10 0v3.934H3a1 1 0 0 1-1-1V11.19a1 1 0 0 1 .292-.707L9.878 2.9a3.008 3.008 0 0 1 4.244 0l7.585 7.586c.186.187.291.44.293.704v9.817Z'
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
