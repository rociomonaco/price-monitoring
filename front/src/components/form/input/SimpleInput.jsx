import { Tooltip } from '@components/Tooltip'
import { Info } from '@components/icons/Info'

export const SimpleInput = ({
  id,
  label,
  placeholder,
  type = 'text',
  register,
  required = true,
  error,
  tooltipText,
  showRequired = false
}) => {
  return (
    <div className='flex flex-col gap-y-1.5'>
      <div className='flex justify-between items-center'>
        <label className='text-xs font-medium text-gray-500' htmlFor={id}>
          {showRequired && '* '}
          {label}
        </label>
        {tooltipText && (
          <Tooltip text={tooltipText}>
            <Info className='cursor-pointer' width={12} height={12} />
          </Tooltip>
        )}
      </div>

      <input
        id={id}
        className={`border rounded-md w-full ${
          error ? 'border-red-600' : 'border-gray-300'
        } p-1.5 outline-none focus:border-gray-700 focus:border-2`}
        type={type}
        {...register(id, { required: required })}
        placeholder={placeholder}
      />
    </div>
  )
}
