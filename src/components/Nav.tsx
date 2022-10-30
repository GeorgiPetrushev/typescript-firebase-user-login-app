import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

const Nav = () => {
  const [user] = useAuthState(auth);
  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <StyleNav>
      <Link to="/"> Home</Link>
      {user ? (
        <Link to="/add-tweet">Add Tweet</Link>
      ) : (
        <Link to="/login"> Login</Link>
      )}

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
    </StyleNav>
  );
};

const StyleNav = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
font-size: 2rem;
height: 10rem;
background-color: black;
color: white;
`;


export default Nav;

