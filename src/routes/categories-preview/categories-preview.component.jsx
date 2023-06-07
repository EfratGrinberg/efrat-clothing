import React from "react";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
// import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  if (!categoriesMap) {
    return;
  }
  return (
    <Fragment className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products=categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}/>
      })}
    </Fragment>
  );
};

export default CategoriesPreview;


