import React from "react";
import { Fragment } from "react";
import { useSelector } from 'react-redux';
// import { CategoriesContext } from "../../contexts/categories.context.jsx";
import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";
import { selectCategoriesMap } from '../../store/categories/category.selector.js';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  if (!categoriesMap) {
    return null; 
  }

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
