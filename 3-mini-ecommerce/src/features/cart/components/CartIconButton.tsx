import { ShoppingCart } from "lucide-react";
import { CartContext } from "../providers/CartProvider";
import { useContext } from "react";

function CartIconButton() {

  // const cartContext = useContext(CartContext);
  const { cart }  = useContext(CartContext); // return { cart: ... , addToCart: ...} 

  return (
    <div className="flex items-center space-x-2">
      <ShoppingCart size={32} />
      <span className="text-[32px] font-bold">{cart.length}</span>
    </div>
  );
  
}

export default CartIconButton;