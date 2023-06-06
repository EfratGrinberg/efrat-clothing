import {React} from "react";
import {Routes,Route} from 'react-router-dom'
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../../routes/category/category.component.jsx';
const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
