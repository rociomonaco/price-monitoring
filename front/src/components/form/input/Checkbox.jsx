export const Checkbox = ({
  id,
  label,
  placeholder,
  register,
  required = true
}) => {
  return (
    <div className='flex items-center gap-x-1.5'>
      <input
        id={id}
        className={`border rounded-md outline-none accent-blue-600`}
        type='checkbox'
        {...register(id, { required: required })}
        placeholder={placeholder}
      />
      <label
        className='text-xs font-medium text-gray-500 cursor-pointer'
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
