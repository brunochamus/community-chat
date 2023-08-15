import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import './LogOut.css'

const LogOut = () => {

    const logOut = () =>{
    signOut(auth);
    }

  return (
    <button className='btn-login btn-logout'
    onClick={logOut}
    >
        <i className="fa-brands fa-google"></i>
        Logout
    </button>
  )
}

export default LogOut