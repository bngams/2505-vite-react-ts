import React, { useState, useEffect, Suspense, lazy } from "react";
import ProductListSkeleton from "../components/ProductListSkeleton";

// we can lazy load the ProductList component
const ProductList = lazy(() => import("../components/ProductList")); // Lazy load ProductList

export const ProductsWithLoading = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('load products');
    setTimeout(() => {
      fetch("https://dummyjson.com/products?limit=10")
        .then((response) => response.json()) // parse the response
        .then((data) => { setProducts(data.products); setLoading(false) } ); // set the products
    }, 2000); // Simulate a delay for loading products
    
  }, []);

  return (
    <>
      {loading ?
          <ProductListSkeleton />
          :        
          <ProductList products={products} />
      } 
    </>
  );
} 

export const ProductsWithSuspense = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('load products');
        fetch("https://dummyjson.com/products?limit=10")
            .then((response) => response.json()) // parse the response
            .then((data) => setProducts(data.products) ); // set the products
    }, []);

    // If specific treatment lazy + fetch or like setTimeout ProductsWithLoading
    // Suspense is not enought
    return (
        <Suspense fallback={<ProductListSkeleton/>}>
            <ProductList products={products} />
        </Suspense>
    );
}

const Products = () => {
  return <ProductsWithLoading />;
}

export default Products;