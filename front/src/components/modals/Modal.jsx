import { Close } from '@components/icons/Close'

export const Modal = ({
  open,
  setClose,
  children,
  hasHeader,
  title = 'Mensaje'
}) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-all z-10 ${
        open ? 'visible backdrop-blur-md bg-black/20' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={`bg-white rounded-xl shadow-md p-6 transition-all max-w-lg w-2/6  ${
          open ? 'scale-100' : 'scale-125 opacity-0'
        }`}
      >
        {hasHeader && (
          <div className='w-full flex justify-between items-center'>
            <h5 className='text-gray-500 font-medium text-lg'>{title}</h5>
            <button
              className='hover:opacity-60 transition-opacity'
              onClick={() => {
                setClose && setClose(false)
              }}
            >
              <Close />
            </button>
          </div>
        )}

        {children}
      </div>
    </div>
  )
}
