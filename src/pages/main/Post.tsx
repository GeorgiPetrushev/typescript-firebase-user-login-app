import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { Post as IPost } from "./Home";
import { useState } from "react";

interface Props {
  post: IPost;
}

const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);

  const [likeAmount, setLikeAmount] = useState<number | null>(null);

  const likesRef = collection(db, "likes");
  const likesDoc = query(likesRef, where("post", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    console.log(data.docs);
  };

  const addLike = async () => {
    await addDoc(likesRef, { userId: user?.uid, postId: post.id });
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div key={post.id}>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="tweet">
        <h3>{post.tweet}</h3>
      </div>
      <div className="footer">
        <h4>@{post.username}</h4>
        <button onClick={addLike}>Like</button>
        {likeAmount && <p> Likes : {likeAmount}</p>}
      </div>
    </div>
  );
};

export default Post;
