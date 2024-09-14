import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 mb-8">Oops! Page not found.</h2>
      <p className="text-gray-500 mb-8">
        Sorry, {`the page you're looking for doesn't exist or has been moved.`}
      </p>
      <Button onClick={handleGoBack} className="px-8">
        Go Back to Signup
      </Button>
    </div>
  );
}

export default NotFound;
