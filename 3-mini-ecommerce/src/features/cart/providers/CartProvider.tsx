import { Product } from "@/features/product/models/Product";
import React, { useEffect } from "react";

type CartContextType = {
  cart: Product[], 
  addToCart: (product: Product) => void
}

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => {}
});

function CartProvider({children} : {children: React.ReactNode}) {
  const [cart, setCart] = React.useState<Product[]>([]);
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    console.log('Init state..');  
  }, []);

  return(
    <CartContext.Provider value={{ cart, addToCart }}>
      {children} 
    </CartContext.Provider>
  );
}

export default CartProvider;