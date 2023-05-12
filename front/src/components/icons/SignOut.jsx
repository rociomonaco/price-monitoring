import React from 'react'

export const SignOut = ({ width = 24, height = 24, fill = '#374957' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox={`0 0 24 24`}
    >
      <g fill={fill} clipPath='url(#a)'>
        <path d='m22.829 9.171-3.88-3.879a1 1 0 0 0-1.413 1.414l3.879 3.88c.115.117.216.248.3.39-.015 0-.027-.009-.042-.009L5.989 11a1 1 0 1 0 0 2l15.678-.032c.028 0 .05-.014.078-.016a1.98 1.98 0 0 1-.334.462l-3.88 3.88a.998.998 0 0 0 .317 1.644.999.999 0 0 0 1.098-.23l3.879-3.88a4 4 0 0 0 0-5.656h.004Z' />
        <path d='M7 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
