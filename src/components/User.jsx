import LogOut from "./LogOut";
import Login from "./Login";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import imagePerson from "../assets/person-circle.svg";


const User = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const image = user ? user.photoURL : imagePerson;
    const name = user ? user.displayName : "user name";
    return(
        <div className="right-side">
            <h1>QuickChat</h1>
            <article className="card-user">
                <img src={image} alt="user photo" referrerPolicy="no-referrer" />
                <p>{name}</p>
                {user ? <LogOut/> : <Login/> }
            </article>
        </div>
    )
}

export default User;