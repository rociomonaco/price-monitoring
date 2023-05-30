export const BtnSubmit = ({ isLoading, children }) => {
  return (
    <button
      className='w-full p-2 rounded-lg font-medium bg-blue-800 text-white hover:opacity-95 transition-opacity btn'
      type='submit'
      disabled={isLoading}
    >
      {children}
    </button>
  )
}
