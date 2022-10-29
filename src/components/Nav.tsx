import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Nav = () => {
  const [user] = useAuthState(auth);
  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/login"> Login</Link>
      <div>
        {user && (
          <div>
            {" "}
            <p>{auth.currentUser?.displayName}</p>
            <img
              src={auth.currentUser?.photoURL || ""}
              alt="missing pic"
              width="100"
              height="100"
            ></img>
            <button onClick={logOut}>Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
