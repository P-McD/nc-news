import React, {useContext} from 'react'

import { UserContext } from "../contexts/UserContext";



export default function HomePage() {
  const { user } = useContext(UserContext);
  return (
    <div className="homepage">
      {user.username ? <p className="user-greeting">Welcome {user.username}!</p> : <p className="user-greeting">Welcome Guest!</p>}
    </div>
    
  )
}
