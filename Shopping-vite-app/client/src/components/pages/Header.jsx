import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        Welcome User
        <Link to="/cart"> Go to Cart </Link>
        <Link to="/order"> Your Orders </Link>
        <Link to="/register"> Register </Link>
        <Link to="/login"> Login </Link>
    </div>
  )
}
