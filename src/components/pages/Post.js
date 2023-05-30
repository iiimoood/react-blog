import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import { useParams } from 'react-router';
import { Link, Navigate } from 'react-router-dom';
import { removeCard } from '../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Post = (props) => {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, postId));
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const deletePost = (e) => {
    e.preventDefault();
    dispatch(removeCard(post.id));
  };

  if (!post) return <Navigate to="/" />;
  return (
    <div>
      <div className="card d-flex flex-row w-75 border-0 m-auto">
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p>
            <span className="fw-bold">Author:</span> {post.author}
          </p>
          <p>
            <span className="fw-bold">Published: </span>
            {post.publishedDate}
          </p>
          <p>{post.shortDescription}</p>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <div>
          <Link to={'/post/edit/' + post.id}>
            <button type="button" className="btn btn-outline-primary me-2">
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => setShowModal(true)}
          >
            Delete
          </button>
        </div>
      </div>

      {showModal && (
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
                This operation will completely remove this post from the app.
                Are you sure you want to do that?
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={deletePost}>
                Remove
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </div>
  );
};

export default Post;
