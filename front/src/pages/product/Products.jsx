import { Loading } from '@components/loaders/Loading'
import { NavLink } from '@components/navigation/NavLink'
import { getAllProducts } from '@services/products'
import { useCallback, useEffect, useState } from 'react'

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
      <ProductList />
    </div>
  )
}

const ProductList = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getAllProducts()
      .then((data) => {
        console.log(data)
        setData(data?.data?.data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <div>
          {data.length === 0 ? (
            <h3>No hay nada para mostrar</h3>
          ) : (
            data?.map((item) => {
              return <div key={item?.id}>{item.name}</div>
            })
          )}
        </div>
      )}
    </div>
  )
}
