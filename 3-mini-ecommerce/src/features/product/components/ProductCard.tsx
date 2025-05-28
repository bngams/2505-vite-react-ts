import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../models/Product";
import { useContext } from "react";
import { CartContext } from "@/features/cart/providers/CartProvider";
import { useAppDispatch } from "@/store/hooks";
import { addToCard } from "@/features/cart/slices/cartSlice";

//ProductCard(props: {product: Product})
function ProductCard({ product } : {product: Product}) {

   // with redux dispatcher
   const dispatch = useAppDispatch()

    // with context object
    // const cartContext = useContext(CartContext);

    // with destructuring
    const { addToCart}  = useContext(CartContext);

    const addProductToCart = () => {
        console.log('Adding product to cart', product);
        // with context
        addToCart(product);
        // with redux
        dispatch(addToCard(product));
    }

    return (
        <Card>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.price} €</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center flex-col">
            <div className="flex justify-center">
              <img className="max-w-[250px] max-h-[250px]" src={product.thumbnail} alt={product.title} />
            </div>
            <button onClick={addProductToCart}>Add to cart</button>

            {/* Example of role-based component usage */}
            {/* <RoleBasedComponent user={user} role="admin">
              <button onClick={addProductToCart}>Edit</button>
            <RoleBasedComponent role="admin"> */}
          </CardContent>
        </Card>
    );
}

export default ProductCard;