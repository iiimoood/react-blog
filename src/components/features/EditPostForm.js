import { editPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import { useParams } from 'react-router';

const EditPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector((state) => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  if (!post) return <Navigate to="/" />;
  return (
    <PostForm
      action={handleSubmit}
      actionText="Edit post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      mainContent={post.mainContent}
    />
  );
};

export default EditPostForm;
