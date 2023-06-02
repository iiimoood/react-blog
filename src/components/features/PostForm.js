import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { getAllCategories } from '../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

function MyComponent() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

const Date = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

const PostForm = ({ action, actionText, ...props }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [mainContent, setMainContent] = useState(props.mainContent || '');
  const [category, setCategory] = useState(props.category || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const categories = useSelector(getAllCategories);

  const handleSubmit = () => {
    setContentError(!mainContent);
    setDateError(!publishedDate);
    if (mainContent && publishedDate) {
      action({ title, author, publishedDate, shortDescription, mainContent });
    }
  };
  return (
    <form onSubmit={validate(handleSubmit)}>
      <div className="form-group mb-2">
        <label>Title</label>
        <input
          {...register('title', { required: true, minLength: 3 })}
          type="text"
          className="form-control w-25"
          id="title"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {errors.title && (
          <small className="d-block form-text text-danger mt-2">
            Title is too short (min is 3)
          </small>
        )}
      </div>
      <div className="form-group mb-2">
        <label>Author</label>
        <input
          {...register('author', { required: true, minLength: 3 })}
          type="text"
          className="form-control w-25"
          id="author"
          placeholder="Enter author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        {errors.author && (
          <small className="d-block form-text text-danger mt-2">
            Author is too short (min is 3)
          </small>
        )}
      </div>
      <div className="form-group mb-2">
        <label>Published</label>
        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
        />
        {dateError && (
          <small className="d-block form-text text-danger mt-2">
            Date can't be empty
          </small>
        )}
      </div>
      <div className="form-group mb-2">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          {categories.map((category) => (
            <option key={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group mb-2">
        <label>Short description</label>
        <textarea
          {...register('shortDescription', { required: true, minLength: 20 })}
          type="text"
          className="form-control w-75"
          id="shortDescription"
          placeholder="Leave a comment here"
          rows="4"
          onChange={(e) => setShortDescription(e.target.value)}
          value={shortDescription}
        />
        {errors.shortDescription && (
          <small className="d-block form-text text-danger mt-2">
            Description is too short (min is 20)
          </small>
        )}
      </div>
      <div className="form-group mb-2">
        <label>Main content</label>
        <ReactQuill
          theme="snow"
          placeholder="Leave a comment here"
          value={mainContent}
          onChange={setMainContent}
        />
        {contentError && (
          <small className="d-block form-text text-danger mt-2">
            Content can't be empty
          </small>
        )}
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
