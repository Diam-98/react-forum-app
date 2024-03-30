import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import profile from '../../assets/profile.jpg'
import AuthModal from '../../modals/AuthModal'

const Header = ({ user }) => {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
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
            <img src={profile} alt='user profile' />
            <Link to='/' className='user-info'>
              <div className='info'>
                <span>{user.name}</span>
                <p>@{user.pseudo}</p>
              </div>
            </Link>
            <div className='logout' onClick={showModal}>
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
