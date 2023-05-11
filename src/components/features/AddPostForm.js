import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useState } from 'react';

const AddPostForm = (props) => {
  const dispatch = useDispatch();
  const [title] = useState('');
  const [author] = useState('');
  const [publishedDate] = useState('');
  const [shortDescription] = useState('');
  const [mainContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title,
        author,
        publishedDate,
        shortDescription,
        mainContent,
        postId: props.postId,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Enter title"
        />
      </div>
      <div class="form-group">
        <label for="author">Password</label>
        <input
          type="text"
          class="form-control"
          id="author"
          placeholder="Enter author"
        />
      </div>
      <div class="form-group">
        <label for="publishedDate">Published</label>
        <input
          type="text"
          class="form-control"
          id="publishedDate"
          placeholder="Enter published date"
        />
      </div>
      <div class="form-group">
        <label for="shortDescription">Short description</label>
        <textarea
          type="text"
          class="form-control"
          id="shortDescription"
          placeholder="Leave a comment here"
          rows="4"
        />
      </div>
      <div class="form-group">
        <label for="mainContent">Main content</label>
        <textarea
          type="text"
          class="form-control"
          id="mainContent"
          placeholder="Leave a comment here"
          rows="7"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Add Post
      </button>
    </form>
  );
};
export default AddPostForm;
