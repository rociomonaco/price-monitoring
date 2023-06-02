import { BtnSubmit } from '@components/form/button/BtnSubmit'
import { Checkbox } from '@components/form/input/Checkbox'
import { SimpleInput } from '@components/form/input/SimpleInput'
import { Loading } from '@components/loaders/Loading'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { createProduct } from '@services/products'
import { Modal } from '@components/modals/Modal'
import { useNavigate } from 'react-router-dom'

export const Product = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [modalInfoOpen, setModalInfoOpen] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setIsLoading(true)
    setModalInfoOpen(true)
    const modifyData = {
      ...data,
      searchTerms: makeArray(data?.searchTerms),
      requiredWords: makeArray(data?.requiredWords),
      wordsToExclude: makeArray(data?.wordsToExclude)
    }
    await createProduct(modifyData)
      .then(() => {
        navigate('/productos')
        setModalInfoOpen(false)
      })
      .catch((error) => {
        setError(error)
        setTimeout(() => {
          setModalInfoOpen(false)
        }, 3000)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const makeArray = (string) => {
    return string.split(' ').filter((item) => item !== '')
  }

  return (
    <div className='w-full flex flex-col gap-y-8'>
      <h2 className='text-2xl font-medium text-gray-700'>Nuevo Producto</h2>

      <Modal open={modalInfoOpen} setClose={setModalInfoOpen}>
        {isLoading ? (
          <Loading />
        ) : (
          <h5 className='font-medium text-red-500 text-center'>{error}</h5>
        )}
      </Modal>

      <form className='flex flex-col gap-y-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='w-full flex flex-col gap-y-2'>
            <SimpleInput
              id='name'
              placeholder='Moladora'
              register={register}
              label='Nombre'
              error={errors.name}
              showRequired
              tooltipText='No afecta a la búsqueda en Mercado Libre'
            />
            <SimpleInput
              id='sku'
              placeholder='MOL4545'
              register={register}
              label='SKU'
              error={errors.sku}
              tooltipText='Número de referencia único de producto. Es importante que sea el mismo código que se utiliza para uso interno en la empresa.'
              showRequired
            />

            <SimpleInput
              id='pvp'
              placeholder='4000'
              register={register}
              label='PVP'
              error={errors.pvp}
              type='number'
              showRequired
              tooltipText='Precio sugerido de la publicación'
            />
            <Checkbox
              id='outPvp'
              register={register}
              required={false}
              label='Sólo fuera del PVP'
            />
          </div>
          <div className='w-full flex flex-col gap-y-2'>
            <SimpleInput
              id='description'
              register={register}
              label='Descripción'
              error={errors.description}
              tooltipText='Breve descripción, la cual no afectará en la búsqueda de Mercado Libre'
              required={false}
            />

            <SimpleInput
              id='searchTerms'
              register={register}
              label='Términos de búsqueda'
              error={errors.searchTerms}
              showRequired
              tooltipText='Palabras para la búsqueda de Mercado Libre'
            />
            <SimpleInput
              id='requiredWords'
              register={register}
              label='Palabras Obligatorias'
              error={errors.requiredWords}
              tooltipText='Palabras que sí o sí deben estar en la publicación'
              required={false}
            />
            <SimpleInput
              id='wordsToExclude'
              register={register}
              label='Palabras a Excluir'
              error={errors.wordsToExclude}
              tooltipText='Las publicaciones que contengan estas palabras no se incluyen'
              required={false}
            />
          </div>
        </div>
        <div className='w-1/6 self-end'>
          <BtnSubmit isLoading={isLoading}>
            {isLoading ? (
              <Loading color={{ text: 'text-white', spinner: 'text-white' }} />
            ) : (
              'Agregar'
            )}
          </BtnSubmit>
        </div>
      </form>
    </div>
  )
}
