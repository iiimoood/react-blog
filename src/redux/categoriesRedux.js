//selectors
export const getCategoryByName = ({ categories }, categoryName) =>
  categories.find((category) => category.name === categoryName);
export const getAllCategories = ({ categories }) => categories;

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default categoriesReducer;
