import { useEffect } from 'react'
import { useAuth } from '@hooks/useAuth'

const MAX_SESSION_TIME = 3 * (60 * 60) * 1000 // milisegundos

export const SessionTimeOutChecker = () => {
  const { onLogout } = useAuth()
  useEffect(() => {
    const checkSessionTimeOut = () => {
      const lastLoginTime = localStorage.getItem('lastLoginTime')
      const currentTime = new Date().getTime()

      if (lastLoginTime && currentTime - lastLoginTime > MAX_SESSION_TIME) {
        onLogout()
      }
    }

    const interval = setInterval(checkSessionTimeOut, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return null
}
