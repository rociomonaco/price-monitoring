export const Info = ({
  className,
  width = 24,
  height = 24,
  fill = '#374957'
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox={`0 0 24 24`}
      className={className}
    >
      <g fill={fill} clipPath='url(#a)'>
        <path d='M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Z' />
        <path d='M14 19h-2v-7h-2v-2h2a2 2 0 0 1 2 2v7ZM12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
