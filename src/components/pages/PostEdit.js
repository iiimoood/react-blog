import { useParams } from 'react-router';

const PostEdit = () => {
  const { id } = useParams();
  return <h1>Edit Post</h1>;
};

export default PostEdit;
