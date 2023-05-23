import { NavLink } from './NavLink'
import { Home } from '@components/icons/Home'
import { SignOut } from '@components/icons/SignOut'
import { AddProducts } from '@components/icons/AddProducts'
import { List } from '@components/icons/List'
import { useAuth } from '@hooks/useAuth'
import { Modal } from '@components/modals/Modal'
import { useState } from 'react'
import { Loading } from '@components/loaders/Loading'
import { getError } from '@/utilities/getError'

const MAIN_NAV_LINKS = [
  { id: '1', title: 'Dashboard', to: '/', Icon: Home },
  { id: '2', title: 'Productos', to: '/productos', Icon: AddProducts },
  { id: '3', title: 'Publicaciones', to: '/publicaciones', Icon: List }
]

export const Navbar = () => {
  const { onLogout, isLoading, error } = useAuth()
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false)

  const handleLogout = async () => {
    setModalLogoutOpen(true)

    await onLogout()
      .then(() => {
        setModalLogoutOpen(true)
      })
      .catch(() => {
        setTimeout(() => {
          setModalLogoutOpen(false)
        }, 3000)
      })
  }

  return (
    <>
      <Modal open={modalLogoutOpen} setClose={setModalLogoutOpen}>
        {isLoading ? (
          <Loading />
        ) : (
          <h5 className='font-medium text-red-500 text-center'>{error}</h5>
        )}
      </Modal>
      <header className='fixed flex flex-col h-screen max-w-[] gap-y-8 p-4 bg-white shadow-md top-0 left-0'>
        <h1 className='flex flex-col items-center text-4xl font-medium text-blue-600'>
          Price. <span className='text-sm text-gray-900'>Monitoring</span>
        </h1>
        <nav className='h-full flex flex-col justify-between'>
          <ul className='flex flex-col gap-y-4'>
            {MAIN_NAV_LINKS.map((link) => {
              const IconComponent = link.Icon
              return (
                <li key={link.id}>
                  <NavLink
                    end
                    title={link.title}
                    to={link.to}
                    Icon={IconComponent}
                  />
                </li>
              )
            })}
          </ul>
          <ul>
            <button
              className='flex justify-start items-center gap-2 p-2 rounded-md transition ease-in text-gray-700 hover:bg-blue-100 outline-none'
              onClick={handleLogout}
            >
              <span>
                <SignOut />
              </span>
              Cerrar Sesión
            </button>
          </ul>
        </nav>
      </header>
    </>
  )
}
