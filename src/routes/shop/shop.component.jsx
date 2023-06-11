import {React} from "react";
import {useDispatch} from 'react-redux';
import {Routes,Route} from 'react-router-dom'
import { useContext, Fragment,useEffect } from "react";
// import { CategoriesContext, CategoriesProvider } from "../../contexts/categories.context.jsx";
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../../routes/category/category.component.jsx';
import {getCategoriesDocuments} from '../../utils/firebase/firebase.utils.js';
import {setCategoriesMap} from '../../store/categories/category.action.js';
const Shop = () => {
  const dispatch =useDispatch();
  useEffect(() => {
    const getCategoriedMap=async()=>{
        const categoryMap=await getCategoriesDocuments('categories');
        dispatch(setCategoriesMap(categoryMap));
       
    };
    getCategoriedMap();

  },[]);

  return (
    // <CategoriesProvider>
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>      
    </Routes>
    // </CategoriesProvider>
  );
};

export default Shop;
