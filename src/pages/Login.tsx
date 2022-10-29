import { provider, auth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const singInGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div>
      <p>Sing in with Google!</p>
      <button onClick={singInGoogle}>Google</button>
    </div>
  );
};

export default Login;
