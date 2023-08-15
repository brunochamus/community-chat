import React from 'react'
import LogIn from '../LogIn/LogIn'
import LogOut from '../LogOut/LogOut'
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import './User.css'

const User = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const image = user ? user.photoURL : "/userImage.png"
    const name = user ? user.displayName : "Name User"

  return (
    <div className="right-side">
        <h1>ChatDev<i className="fa-solid fa-comments"></i></h1>
        <article className="card-user">
            <img src={image} alt="userPhoto" referrerPolicy='no-referrer' />
            <p>{name}</p>
            {user ?  <LogOut/> : <LogIn/>}
        </article>
    </div>
  )
}

export default User