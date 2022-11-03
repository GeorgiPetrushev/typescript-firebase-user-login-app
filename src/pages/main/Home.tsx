import { collection, getDocs  } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Post from "./Post";
import styled from "styled-components";

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
    <StyleHome>
      <h1>Tweets</h1>
      <h3>If you want to add or like tweet you need to login all data is protected by firebase</h3>
      <div className="tweet-list-blo">
        {tweetList?.map((post:Post) => (
          <Post post={post} />
        ))}
      </div>
    </StyleHome>
  );
};

const StyleHome = styled.div`

background-color: rgb(32, 33, 36);
min-height: 90vh;
color: white;
h1{
  padding: 2rem 0;
}
h3{
  margin-bottom: 1rem;
}
.tweet-list-blo{
  padding: 1rem;
  border: 1px solid white;
  margin:  0 1rem ;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  border-radius: 1rem;
}
.tweet{
  background-color: rgb(28,155,238);
}
.footer{
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
}
`;

export default Home;
