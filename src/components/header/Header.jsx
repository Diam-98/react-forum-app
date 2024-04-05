import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import profile from '../../assets/profile.jpg'
import AuthModal from '../../modals/AuthModal'
import { UserAPI } from '../../api/UserApi'

const Header = ({ user, setUser, setToken }) => {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const logout = () => {
    UserAPI.logout()
      .then((response) => {
        console.log(response)
        setUser({})
        setToken(null)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <header>
      <div className='logo'>
        <h1>
          Connector <span>.</span>
        </h1>
      </div>
      <div className='right'>
        {Object.keys(user).length != 0 ? (
          <>
            <img src={user?.image ? user?.image : profile} alt='user profile' />
            <Link to='/' className='user-info'>
              <div className='info'>
                <span>{user.name}</span>
                <p>@{user.pseudo}</p>
              </div>
            </Link>
            <div className='logout' onClick={logout}>
              <LogoutOutlined />
            </div>
          </>
        ) : (
          <div className='login' onClick={showModal}>
            <LoginOutlined /> Se connecter
          </div>
        )}
      </div>
      <AuthModal open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
