import React from 'react';
import SHOPDATA from "../../shop-data.json";
import { useContext } from 'react';
import {ProductContext} from '../../contexts/products.component'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss';
const Shop = () => {
    const {products}=useContext(ProductContext);
  return ( 
    <div className='products-container'>
      {SHOPDATA.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop