import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getCategoryByName } from '../../redux/categoriesRedux';
import { Navigate } from 'react-router-dom';

const Category = (props) => {
  const { categoryName } = useParams();
  const category = useSelector((state) =>
    getCategoryByName(state, categoryName)
  );

  if (!category) return <Navigate to="/" />;
  return;
};

export default Category;
