import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Header() {
    return (
        <header className="w-full bg-gray-200 flex justify-between p-5">
            <span>My app</span>
            <nav>
                <ul className="flex items-center gap-2">
                    <li>Home</li>
                    <Separator orientation="vertical" />
                    <li>Contact</li>
                    <Separator orientation="vertical" />
                    <li>
                        <Button variant="secondary">Login</Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 
export default Header;