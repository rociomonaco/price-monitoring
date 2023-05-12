import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'
import { Login } from '@pages/Login'
import { PrivatedRoutes } from '@router/PrivatedRoutes'

export function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PrivatedRoutes>
                <Outlet />
              </PrivatedRoutes>
            }
          >
            <Route index element={<h1>DAshboard</h1>} />
            <Route path='productos' element={<h1>Products</h1>} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>

          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
