import React from 'react'
import './feedCard.css'
import { SaveOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile.jpg'

const ResponseCard = () => {
  return (
    <article className='feed'>
      <div className='card-top'>
        <div className='left'>
          <Link to='/' className='author'>
            <img src={profile} alt='author profile' />
            <div className='author-info'>
              <span>Diam Diallo</span>
              <p>@diamil-123</p>
            </div>
          </Link>
        </div>
        <div className='save-question'>
          <SaveOutlined className='save-icon'></SaveOutlined>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quis
        magni! Debitis velit esse nam sapiente cum sint accusantium, corporis
        exercitationem harum dignissimos reprehenderit odit totam quasi numquam
        aspernatur dolores?
      </p>
    </article>
  )
}

export default ResponseCard
