import { useSelector } from 'react-redux';
import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { selectCategoriesMap } from '../../store/categories/category.selector'
// import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  // const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap && categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap && categoriesMap[category]);
  }, [category, categoriesMap]);

  if (!products) {
    return null; // או תוכל להציג הודעת שגיאה או תצוגה אחרת במקום null, כפי שמתאים לך
  }

  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Category;
