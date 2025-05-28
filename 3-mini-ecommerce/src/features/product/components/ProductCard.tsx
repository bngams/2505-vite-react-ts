import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../models/Product";
import { useContext } from "react";
import { CartContext } from "@/features/cart/providers/CartProvider";

//ProductCard(props: {product: Product})
function ProductCard({ product } : {product: Product}) {

    // const cartContext = useContext(CartContext);
    const { addToCart}  = useContext(CartContext);

    const addProductToCart = () => {
        console.log('Adding product to cart', product);
        addToCart(product);
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
          </CardContent>
        </Card>
    );
}

export default ProductCard;