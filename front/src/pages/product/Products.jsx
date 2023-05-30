import { NavLink } from '@components/navigation/NavLink'

export const Products = () => {
  return (
    <div className='w-full flex flex-col gap-y-8'>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col gap-y-1'>
          <h2 className='text-2xl font-medium text-gray-700'>Productos</h2>
          <h5 className='text-sm text-gray-400'>
            Aquí puedes crear los filtros que quieras para la búsqueda de las
            publicaciones a monitorear
          </h5>
        </div>
        <NavLink title='Agregar' section='products' to='/producto' end />
      </div>
    </div>
  )
}

const ProductList = () => {
  return <div>Listado</div>
}
