import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import google  from "../assets/google.svg";

const LogOut = () => {
    const logOut = () =>{
        signOut(auth);
    }
    return(
        <>
            <button
                className="btn-login btn-logout"
                onClick={logOut}
                >
                <img className="m-2 p-2 " src={google} alt="gogle"  />
                Logout
            </button>
        </>
    )
}

export default LogOut;