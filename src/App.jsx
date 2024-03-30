import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { UserAPI } from './api/UserApi'
import { useAuth } from './context/AuthProvider'

function App() {
  const { user, setUser } = useAuth()
  useEffect(() => {
    UserAPI.currentUser()
      .then((response) => {
        setUser(response.data.data)
        console.log(response.data.data)
      })
      .catch((err) => {
        const resp = err.response
        // if (resp.status === 401) {
        //   return <Navigate to='/login' state={{ from: location }} replace />
        // }
      })
  }, [])

  return (
    <>
      <Header user={user} />
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default App
