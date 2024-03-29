import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComp = ({ name, icon, className }) => {
  return (
    <Link to='/' className={className}>
      {icon}
      {name}
    </Link>
  )
}

export default ButtonComp
