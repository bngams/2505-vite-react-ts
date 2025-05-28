import ProductCard from "./ProductCard";
import { Product } from "../models/Product";

function ProductList({ products } : { products: Product[] }) {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
export default ProductList;