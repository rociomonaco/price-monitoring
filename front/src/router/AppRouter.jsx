import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'
import { Login } from '@pages/Login'
import { PrivatedRoutes } from '@router/PrivatedRoutes'
import { AuthContextProvider } from '@context/AuthContext'
import { SessionTimeOutChecker } from '@components/SessionTimeOutChecker'

export function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route
              path='/'
              element={
                <PrivatedRoutes>
                  <SessionTimeOutChecker />
                  <Outlet />
                </PrivatedRoutes>
              }
            >
              <Route index element={<h1>DAshboard</h1>} />
              <Route path='productos' element={<h1>Products</h1>} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}
