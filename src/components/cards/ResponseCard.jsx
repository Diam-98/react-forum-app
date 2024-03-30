import React from 'react'
import './feedCard.css'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile.jpg'

const ResponseCard = ({ response }) => {
  return (
    <article className='feed'>
      <div className='card-top'>
        <div className='left'>
          <Link to='/' className='author'>
            <img src={profile} alt='author profile' />
            <div className='author-info'>
              <span>{response?.author?.name}</span>
              <p>@{response?.author?.pseudo}</p>
            </div>
          </Link>
        </div>
      </div>
      <p>{response?.description}</p>
    </article>
  )
}

export default ResponseCard
