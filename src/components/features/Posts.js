import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { NavLink } from 'react-router-dom';
import DateToStr from '../../utils/dateToStr';

const Posts = () => {
  const posts = useSelector(getAllPosts);
  return (
    <div className="d-flex flex-wrap justify-content-between mr-1">
      {posts.map((post) => (
        <div key={post.id} className="card col-12 col-md-6 col-lg-4 row">
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <p>
              <span className="fw-bold">Author:</span> {post.author}
            </p>
            <p>
              <span className="fw-bold">Published: </span>
              {DateToStr(post.publishedDate)}
            </p>
            <p>
              <span className="fw-bold">Category:</span> {post.category}
            </p>
            <p>{post.shortDescription}</p>
            <button type="button" className="btn btn-primary ">
              <NavLink
                to={'/post/' + post.id}
                className="text-decoration-none text-light"
              >
                Read more
              </NavLink>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
