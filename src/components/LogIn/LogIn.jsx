import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase";


const LogIn = () => {

    const googleLogin = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

  return (
    <button className='btn-login' 
    onClick={googleLogin} >
        <i className="fa-brands fa-google"></i>
        Sing in white google
    </button>
  )
}

export default LogIn