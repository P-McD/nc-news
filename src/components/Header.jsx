import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'



function Header() {
  const { user } = useContext(UserContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (user.username) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  return (
    <div className='header'>
      <h1><Link to="/">NC News</Link></h1>
      <Link to="/articles">Articles</Link>
      <section className="Account">
        {isLoggedIn ? <Link to="/account">My Account</Link> : <Link to="/signin">Sign In</Link>}
      </section>
    </div>
  )
}

export default Header