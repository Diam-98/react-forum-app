import React, { useEffect, useState } from 'react'
import { menuItem } from '../../data'
import './navbar.css'
import AddQuestionModal from '../../modals/AddQuestionModal'
import { PlusOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isItemClicked, setIsItemClicked] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [openAddQuestionModal, setOpenAddQuestionModal] = useState(false)
  const navigate = useNavigate()

  const handleOnMenuItemClick = (item) => {
    setIsItemClicked(item.id)
    navigate(item.path)
  }

  const handleOpenQuestionModal = () => {
    setOpenAddQuestionModal(true)
  }

  useEffect(() => {
    updateDimensions()

    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const updateDimensions = () => {
    setIsMobile(window.innerWidth <= 820)
  }

  return (
    <nav className={isMobile ? 'mobile-nav' : 'widescreen-nav'}>
      <ul>
        <li className='add-question-btn' onClick={handleOpenQuestionModal}>
          <PlusOutlined />
          Poser une Question
        </li>
        {menuItem.map((item) => (
          <li
            key={item.id}
            className={
              isItemClicked == item.id ? 'menu-item active' : 'menu-item'
            }
            onClick={() => handleOnMenuItemClick(item)}
          >
            <div className='menu-icon'>{item.icon}</div>
            <div className='menu-title'>{item.title}</div>
          </li>
        ))}
      </ul>

      <AddQuestionModal
        openAddQuestionModal={openAddQuestionModal}
        setOpenAddQuestionModal={setOpenAddQuestionModal}
      />
    </nav>
  )
}

export default Navbar
