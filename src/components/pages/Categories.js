import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesRedux';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(getAllCategories);
  return (
    <div className="w-75 d-flex flex-column justify-content-center m-auto">
      <h1>All categories</h1>
      <div>
        {categories.map((category) => (
          <div className="card d-flex flex-row card-body m-auto ">
            <Link to={'/category/' + category.name} key={category.id}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
