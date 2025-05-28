import { ShoppingBasket, ShoppingCart } from "lucide-react";
import { CartContext } from "../providers/CartProvider";
import { useContext } from "react";
import { selectProducts } from "../slices/cartSlice";
import { useAppSelector } from "@/store/hooks";

function CartIconButton() {

  //with context object with destructuring or not
  // const cartContext = useContext(CartContext);
  const { cart }  = useContext(CartContext); // return { cart: ... , addToCart: ...} 

  // from redux store
  const products = useAppSelector(selectProducts);

  return (
    <div className="flex gap-2">
      <div className="flex items-center space-x-2">
        <ShoppingCart size={32} />
        <span className="text-[32px] font-bold">{cart.length}</span>
      </div>
      <div className="flex items-center space-x-2">
        <ShoppingBasket size={32} />
        <span className="text-[32px] font-bold">{products.length}</span>
      </div>
    </div>
  );
  
}

export default CartIconButton;