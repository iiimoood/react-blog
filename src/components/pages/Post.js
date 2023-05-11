import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { removeCard } from '../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Post = (props) => {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, postId));
  const dispatch = useDispatch();

  const deletePost = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  const modalWindow = () => {
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              This operation will completely remove this post from the app. Are
              you sure you want to do that?
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary" onClick={deletePost}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  };

  if (!post) return <Navigate to="/" />;
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p>
            <span className="fw-bold">Author:</span> {post.author}
          </p>
          <p>
            <span className="fw-bold">Published: </span>
            {post.content}
          </p>
          <p>{post.shortDescription}</p>
        </div>
      </div>
      <button type="button" className="btn btn-outline-primary">
        Edit
      </button>
      <button
        type="button"
        class="btn btn-outline-danger"
        onClick={modalWindow}
      >
        Delete
      </button>
    </div>
  );
};

export default Post;
