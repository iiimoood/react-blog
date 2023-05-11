import { NavLink } from 'react-router-dom';
import Posts from '../features/Posts';

const Home = () => {
  return (
    <div>
      <span className="row me-1 mb-3">
        <h1 className="col-9 col-md-10 col-xl-11">All posts</h1>
        <button
          type="button"
          class="btn btn-outline-primary col-3 col-md-2 col-xl-1"
        >
          <NavLink to="/post/add" className="text-decoration-none">
            Add post
          </NavLink>
        </button>
      </span>
      <Posts />
    </div>
  );
};

export default Home;
