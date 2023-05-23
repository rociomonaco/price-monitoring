import { SIZE_TYPES } from '@/utilities/sizes'
import { Spinner } from '@components/icons/Spinner'

export const Loading = ({
  text = 'Cargando...',
  size = SIZE_TYPES.NORMAL,
  color = { text: 'text-gray-500', spinner: 'text-blue-500' }
}) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <Spinner color={color?.spinner} size={sizeMatcher(size)} />
      <p className={`font-medium ${color?.text}`}>{text}</p>
    </div>
  )
}

const sizeMatcher = (size) => {
  const types = {
    SMALL: 'h-3 w-3',
    NORMAL: 'h-5 w-5',
    LARGE: 'h-10 w-10',
    EXTRA: 'h-13 w-13'
  }
  return types[size]
}
