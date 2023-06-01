import CategoryItem from "../category-item/category-item.component"; 
import './directory.styles.scss'
const Direcory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Direcory;
