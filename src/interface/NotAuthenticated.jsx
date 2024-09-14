import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

function NotAuthenticated() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 text-center mb-4">
          To access the home page and all its features, please log in with your
          existing account.
        </p>
        <div className="flex justify-center mb-6">
          <Button className="px-8 w-full" onClick={handleGoBack}>
            Login
          </Button>
        </div>
        <p className="text-center text-gray-500">
          {`Don't`} have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up here.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotAuthenticated;
