import CartIconButton from "@/features/cart/components/CartIconButton";
import { mainNavItems } from "@/routes";
import { House } from "lucide-react";
import { Link } from "react-router";

function Header() {

    return (
      <header className="flex justify-between items-center p-4 mb-4 bg-gray-200">
        <div>
            <Link to="/home" className="flex items-center space-x-2">
                <House size={32} />
                <span className="text-[32px] font-bold">My brand</span>
            </Link>
        </div>
        <nav>
            <ul className="flex space-x-4">
                {mainNavItems.map((item, index) => (
                    <li key={index}>
                        <Link className="text-[25px]" to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="flex items-center space-x-2">
            <CartIconButton />
        </div>
      </header>
    )
}

export default Header;