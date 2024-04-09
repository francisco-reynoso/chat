import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import google  from "../assets/google.svg";
import { auth } from "./Firebase";

const Login = () => {
    const googleLogin = () =>{
        const provider =  new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
    }
    return(
        <button
            className="btn-login"
            onClick={googleLogin}
        >
            <img className="m-2 p-2 " src={google} alt="gogle" />
            sing in with google 
        </button>
    )
    
}

export default Login;