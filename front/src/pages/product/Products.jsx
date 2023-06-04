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

  const modifyDataStructure = data.map((item) => {
    return { name: item?.name, description: item?.description, pvp: item?.pvp }
  })

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h2 className='text-red-600 font-medium'>Error</h2>
      ) : (
        <div className='flex justify-center w-full'>
          {data.length === 0 ? (
            <h3>No hay nada para mostrar</h3>
          ) : (
            <Table
              data={modifyDataStructure}
              headers={[
                { internalName: 'name', value: 'Nombre' },
                { internalName: 'description', value: 'Producto' },
                { internalName: 'pvp', value: 'PVP' }
              ]}
            />
          )}
        </div>
      )}
    </div>
  )
}

const Table = ({ data, headers, options = true }) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 capitalize bg-gray-50'>
          <tr>
            {headers?.length > 0 &&
              headers.map((header) => {
                return (
                  <th key={header?.value} scope='col' className='px-6 py-3'>
                    {header?.value}
                  </th>
                )
              })}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex} className='bg-white border-b'>
              {row !== {} &&
                headers.map((header, headerIndex) =>
                  headerIndex === 0 ? (
                    <th
                      key={`${rowIndex}-${headerIndex}`}
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                    >
                      {row[header?.internalName]}
                    </th>
                  ) : (
                    <td
                      key={`${rowIndex}-${headerIndex}`}
                      className='px-6 py-4'
                    >
                      {row[header?.internalName]}
                    </td>
                  )
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
