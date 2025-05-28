import { Link } from "react-router";

function AuthUserButton() {
  // state isLoggedIN => from a state
  const isLoggedIn = false; // This should be replaced with actual authentication logic

  return (
    <>
    { isLoggedIn ? (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Logout
        </button>
    ) : (    
        <Link to={'/auth/login'}  className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
        </Link>
    )    
    }
    </>
  );
  
}

export default AuthUserButton;