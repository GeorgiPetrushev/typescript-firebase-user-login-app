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
          <StyleUserInfo>
            {" "}
            <p>{auth.currentUser?.displayName}</p>
          
              <img
                src={auth.currentUser?.photoURL || ""}
                alt="missing pic"
                width="100"
                height="100"
              ></img>
              <button onClick={logOut} className="logout">
                Log Out
              </button>
          </StyleUserInfo>
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
  min-height: 10vh;
  background-color: black;
  color: white;
  a{
    color: white;
    &:hover{
      color: rgb(28,155,238,0.9);
    }
  }
  

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 2rem 0;
}

`;
const StyleUserInfo = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    margin: 0 2rem;
    border-radius:5rem;
    height: 3rem;
    width: 3rem;
  }
  button{
    background-color: rgb(28,155,239);
    border: none;
    height: 2rem;
    width: 7rem;
    font-size: 1rem;
  }
`;

export default Nav;
