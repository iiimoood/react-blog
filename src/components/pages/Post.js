import { useParams } from 'react-router';


const Post = () => {
    const { id } = useParams();
    return (
      <h1>SinglePost</h1>
    );
  };
  
  export default Post;