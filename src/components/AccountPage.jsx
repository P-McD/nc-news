import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function AccountPage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username) {
      navigate("/signin");
    }
  }, [user]);

  const signOut = () => {
    setUser({})
  }
  return <div>
    <h2>My Account</h2>
    <img src={user.avatar_url} alt={user.username} />
    <p>Name: {user.name}</p>
    <p>Username: {user.username}</p>
    <button onClick={signOut}>Sign Out</button>
  </div>;
}
