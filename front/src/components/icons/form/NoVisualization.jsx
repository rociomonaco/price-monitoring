export const NoVisualization = ({
  fill = '#374957',
  width = '16',
  height = '16',
  className
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill='none'
    viewBox='0 0 24 24'
    className={className}
  >
    <g clipPath='url(#a)'>
      <path
        fill={fill}
        d='M23.27 9.419a15.867 15.867 0 0 0-3.37-3.91l2.8-2.8a1 1 0 0 0-1.414-1.413L18.24 4.345A12.054 12.054 0 0 0 12 2.655c-6.191 0-9.72 4.238-11.271 6.764a4.908 4.908 0 0 0 0 5.162 15.864 15.864 0 0 0 3.37 3.909l-2.8 2.8a1 1 0 1 0 1.415 1.414l3.052-3.052A12.054 12.054 0 0 0 12 21.345c6.19 0 9.719-4.238 11.27-6.764a4.908 4.908 0 0 0 0-5.162ZM2.434 13.534a2.918 2.918 0 0 1 0-3.068C3.767 8.3 6.782 4.655 12 4.655a10.1 10.1 0 0 1 4.766 1.165l-2.013 2.013a4.992 4.992 0 0 0-6.92 6.92l-2.31 2.31a13.72 13.72 0 0 1-3.09-3.53ZM15 12a3 3 0 0 1-3 3 2.95 2.95 0 0 1-1.285-.3l3.985-3.985c.196.4.298.84.3 1.285Zm-6 0a3 3 0 0 1 3-3 2.95 2.95 0 0 1 1.285.3L9.3 13.285A2.95 2.95 0 0 1 9 12Zm12.567 1.534c-1.334 2.166-4.35 5.81-9.567 5.81-1.66.01-3.297-.39-4.766-1.164l2.013-2.013a4.992 4.992 0 0 0 6.92-6.92l2.31-2.31c1.225.99 2.27 2.184 3.09 3.529a2.919 2.919 0 0 1 0 3.068Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='none' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
