import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  userId: string;
  title: string;
  tweet: string;
  username: string;
}

const Home = () => {
  const [tweetList, setTweetList] = useState<Post[] | null>(null);
  const readData = async () => {
    const querySnapshot = await getDocs(collection(db, "tweet"));
    setTweetList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="home=page">
      <div className="tweet-list-blo">
        {tweetList?.map((arr) => (
          <div key={arr.id}> {arr.tweet}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
