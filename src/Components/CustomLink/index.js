import React from 'react'
import { Link } from 'react-router-dom';

const CustomLink = ({to,name}) => {
  return (
    <div>
        <Link style={{textDecoration:'none', color:'grey' }} to={to}>{name}</Link>
    </div>
  )
}

export default CustomLink