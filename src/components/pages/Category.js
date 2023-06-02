import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getCategoryByName } from '../../redux/categoriesRedux';
import { Navigate } from 'react-router-dom';
import { getAllPosts } from '../../redux/postsRedux';
import { NavLink } from 'react-router-dom';
import DateToStr from '../../utils/dateToStr';

const Category = (props) => {
  const { categoryName } = useParams();
  const category = useSelector((state) =>
    getCategoryByName(state, categoryName)
  );
  const posts = useSelector(getAllPosts);
  const categoryPosts = posts.filter((post) => post.category === categoryName);

  if (!category) return <Navigate to="/" />;
  return (
    <div className="card d-flex flex-row flex-wrap border-0 m-auto">
      {categoryPosts.map((post) => (
        <div key={post.id} className="card col-12 col-md-6 col-lg-4 row mr-2">
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

export default Category;
