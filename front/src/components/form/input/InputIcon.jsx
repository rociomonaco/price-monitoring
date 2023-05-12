import React from 'react'

export const InputIcon = ({
  id,
  label,
  placeholder,
  type = 'text',
  register,
  required = true,
  error,
  Icon,
  onClick
}) => {
  return (
    <div className='flex flex-col gap-y-1.5'>
      <label className='text-xs font-medium text-gray-500' htmlFor={id}>
        {label}
      </label>
      <div className='relative'>
        <input
          id={id}
          className={`border rounded-md w-full ${
            error ? 'border-red-600' : 'border-gray-300'
          } p-1.5 outline-none focus:border-gray-700 focus:border-2`}
          type={type}
          {...register(id, { required: required })}
          placeholder={placeholder}
          autoComplete='off'
        />
        {Icon && (
          <button
            type='button'
            className='absolute right-1.5 top-3'
            onClick={onClick}
          >
            {Icon}
          </button>
        )}
      </div>
    </div>
  )
}
