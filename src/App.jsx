import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { UserAPI } from './api/UserApi'
import { useAuth } from './context/AuthProvider'

function App() {
  const { user, setUser, setToken } = useAuth()
  useEffect(() => {
    UserAPI.currentUser()
      .then((response) => {
        setUser(response.data.data)
      })
      .catch((err) => {
        const resp = err.response
        if (resp.status === 401) {
          setUser({})
          setToken(null)
        }
      })
  }, [])

  return (
    <>
      <Header user={user} setUser={setUser} setToken={setToken} />
      <main>
        {Object.keys(user).length != 0 && <Navbar />}
        <Outlet />
      </main>
    </>
  )
}

export default App
