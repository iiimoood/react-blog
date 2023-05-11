import { useParams } from 'react-router';

const Post = (props) => {
  const { id } = useParams();

  return <h1>Single Post</h1>;
};

export default Post;
