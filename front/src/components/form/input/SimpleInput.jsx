import React from 'react'

export const SimpleInput = ({
  id,
  label,
  placeholder,
  type = 'text',
  register,
  required = true,
  error
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
        />
      </div>
    </div>
  )
}
