import { useState } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default App
