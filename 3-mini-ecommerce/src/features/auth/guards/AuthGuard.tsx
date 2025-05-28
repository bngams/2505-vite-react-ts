import { Link } from "react-router";
import { useAuth } from "../providers/AuthProvider";

function AuthGuard({children, isPrivate}: {children: React.ReactNode, isPrivate: boolean}) {
  // from scratch
  // from context
  const { isLoggedIn } = useAuth();

  return (
    <>
    { (isPrivate && isLoggedIn)|| !isPrivate  ? (
        <>{children}</>
    ) : (
        // TODO: check auth and redirect in component logic 
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="mb-4">You must be logged in to view this page.</p>
            <Link to="/auth/login" className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Login
            </Link>
        </div>    
        )}
    </>
  );
}
export default AuthGuard; 