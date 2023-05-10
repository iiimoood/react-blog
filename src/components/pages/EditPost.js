import { useParams } from 'react-router';

const EditPost = () => {
  const { id } = useParams();
  return <h1>Edit Post</h1>;
};

export default EditPost;
