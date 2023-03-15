import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <h1>NC News</h1>
      <Link to="/articles">Articles</Link>
    </div>
  )
}

export default Header