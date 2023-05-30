import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Visualization } from '@components/icons/form/Visualization'
import { NoVisualization } from '@components/icons/form/NoVisualization'
import { InputIcon } from '@components/form/input/InputIcon'
import { SimpleInput } from '@components/form/input/SimpleInput'
import { useAuth } from '@hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@context/AuthContext'
import { Loading } from '@components/loaders/Loading'
import { BtnSubmit } from '@components/form/button/BtnSubmit'

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const { onLogin, isLoading, error } = useAuth()
  const { isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    isAuthenticated && navigate('/')
  }, [isAuthenticated])

  const onSubmit = async (data) => {
    if (!data) return

    await onLogin(data)
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-blue-950'>
      <div className='p-3 w-1/3 h-96 flex flex-col justify-evenly bg-slate-50 rounded-md'>
        <h2 className='text-4xl font-medium text-center'>¡Bienvenido!</h2>
        <form
          className='flex flex-col gap-y-5 mx-11'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-y-2'>
            <SimpleInput
              id='email'
              placeholder='ProtectAsociados@gmail.com'
              register={register}
              label='Email'
              error={errors.email}
              type='email'
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
          {error && <span className='text-red-600 font-medium'>{error}</span>}

          <BtnSubmit isLoading={isLoading}>
            {isLoading ? (
              <Loading color={{ text: 'text-white', spinner: 'text-white' }} />
            ) : (
              'Iniciar Sesión'
            )}
          </BtnSubmit>
        </form>
      </div>
    </div>
  )
}
