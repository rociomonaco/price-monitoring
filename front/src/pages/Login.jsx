import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Visualization } from '@components/icons/form/Visualization'
import { NoVisualization } from '@components/icons/form/NoVisualization'
import { InputIcon } from '@components/form/input/InputIcon'
import { SimpleInput } from '@components/form/input/SimpleInput'

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    console.log(errors)
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-blue-950'>
      <div className='p-3 w-1/3 h-96 flex flex-col justify-evenly bg-slate-50 rounded-md'>
        <h2 className='text-4xl font-medium text-center'>Iniciar Sesión</h2>
        <form
          className='flex flex-col gap-y-5 mx-11'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-y-2'>
            <SimpleInput
              id='userName'
              placeholder='ProtectAsociados'
              register={register}
              label='Nombre de usuario'
              error={errors.userName}
            />
            <InputIcon
              id='password'
              placeholder='*******'
              register={register}
              type={showPassword ? 'text' : 'password'}
              label='Contraseña'
              error={errors.password}
              Icon={showPassword ? <Visualization /> : <NoVisualization />}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button
            className='w-full p-2 rounded-lg font-medium bg-blue-800 text-white hover:opacity-95 transition-opacity'
            type='submit'
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  )
}
