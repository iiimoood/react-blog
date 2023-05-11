import PropTypes from 'prop-types';
import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [mainContent, setMainContent] = useState(props.MainContent || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, mainContent });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label>Title</label>
        <input
          type="text"
          className="form-control w-25"
          id="title"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-group mb-2">
        <label>Password</label>
        <input
          type="text"
          className="form-control w-25"
          id="author"
          placeholder="Enter author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </div>
      <div className="form-group mb-2">
        <label>Published</label>
        <input
          type="text"
          className="form-control w-25"
          id="publishedDate"
          placeholder="Enter published date"
          onChange={(e) => setPublishedDate(e.target.value)}
          value={publishedDate}
        />
      </div>
      <div className="form-group mb-2">
        <label>Short description</label>
        <textarea
          type="text"
          className="form-control w-75"
          id="shortDescription"
          placeholder="Leave a comment here"
          rows="4"
          onChange={(e) => setShortDescription(e.target.value)}
          value={shortDescription}
        />
      </div>
      <div className="form-group mb-2">
        <label>Main content</label>
        <textarea
          type="text"
          className="form-control w-75"
          id="mainContent"
          placeholder="Leave a comment here"
          rows="7"
          onChange={(e) => setMainContent(e.target.value)}
          value={mainContent}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {actionText}
      </button>
    </form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};

export default PostForm;
