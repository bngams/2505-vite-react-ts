import { useNavigate } from "react-router";
import ReactIcon from "@/assets/react.svg";

function Home() {
    const navigate = useNavigate();

    function scrollTo(elementId: string) {
        document.getElementById(elementId)?.scrollIntoView();
    }

    return (
        <>
            <div id="hero" className="text-center">
                <h1 className="text-center">My first React App</h1>
                <div className="flex justify-center">
                  <img src={ReactIcon} alt="React" className="h-[250px] w-[250px]"/>
                </div>
                <p>My super brand!</p>
                <button onClick={() => navigate("/products")}>Buy Products</button>
                <button onClick={() => scrollTo("intro")}>Continue</button>
            </div>
            <div id="intro">Lorem ...</div>
        </>
    );
}
export default Home;