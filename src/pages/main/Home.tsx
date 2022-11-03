import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Post from "./Post";

export interface Post {
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
        {tweetList?.map((post:Post) => (
          <Post post={post}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
