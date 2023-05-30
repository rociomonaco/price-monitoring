import { Checkbox } from '@components/form/input/Checkbox'
import { SimpleInput } from '@components/form/input/SimpleInput'
import { useForm } from 'react-hook-form'

export const Product = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <div className='w-full flex flex-col gap-y-8'>
      <h2 className='text-2xl font-medium text-gray-700'>Nuevo Producto</h2>

      <form className='flex flex-col md:flex-row gap-5'>
        <div className='w-full flex flex-col gap-y-2'>
          <SimpleInput
            id='nombre'
            placeholder='Moladora'
            register={register}
            label='Nombre'
            error={errors.nombre}
          />
          <SimpleInput
            id='sku'
            placeholder='MOL4545'
            register={register}
            label='SKU'
            error={errors.sku}
            tooltip='Número de referencia único de producto. Es importante que sea el mismo código que se utiliza para uso interno en la empresa.'
          />

          <SimpleInput
            id='pvp'
            placeholder='4000'
            register={register}
            label='PVP'
            error={errors.pvp}
            type='number'
          />
          <Checkbox
            id='outPvp'
            register={register}
            label='Sólo fuera del PVP'
          />
        </div>
        <div className='w-full flex flex-col gap-y-2'>
          <SimpleInput
            id='descripcion'
            register={register}
            label='Descripción'
            error={errors.descripcion}
          />

          <SimpleInput
            id='terminosBusqueda'
            register={register}
            label='Términos de búsqueda'
            error={errors.terminosBusqueda}
          />
          <SimpleInput
            id='palabrasObligatorias'
            register={register}
            label='Palabras Obligatorias'
            error={errors.palabrasObligatorias}
          />
          <SimpleInput
            id='palabrasAExcluir'
            register={register}
            label='Palabras a Excluir'
            error={errors.palabrasAExcluir}
          />
        </div>
      </form>
    </div>
  )
}
