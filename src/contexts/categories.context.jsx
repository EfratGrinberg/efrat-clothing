import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
import { getCategoriesDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriedMap=async()=>{
        const categoryMap=await getCategoriesDocuments();
        setCategoriesMap(categoryMap);
       
    };
    getCategoriedMap();

  },[]);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
