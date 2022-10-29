import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

const Nav = () => {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/login"> Login</Link>
      <div>
        <p>{auth.currentUser?.displayName}</p>
        <img src={auth.currentUser?.photoURL || ""} alt="missing pic" width="100" height="100"></img>
      </div>
    </div>
  );
};

export default Nav;
