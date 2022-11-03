import { Post as IPost} from "./Home";

interface Props {
    post: IPost; 
}


const Post = (props:Props) => {
    const {post} = props;
  return <div key={post.id}>
    <div className="title">
        <h1>{post.title}</h1>
    </div>
    <div className="tweet">
        <h3>{post.tweet}</h3>
    </div>
    <div className="footer">
        <h4>@{post.username}</h4>
    </div>
  </div>;
};

export default Post;
