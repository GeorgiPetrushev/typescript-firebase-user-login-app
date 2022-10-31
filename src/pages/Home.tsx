import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const Home = () => {
  const readData = async () => {
    const querySnapshot = await getDocs(collection(db, "tweet"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  };
  readData();

  return <div>Home</div>;
};

export default Home;
