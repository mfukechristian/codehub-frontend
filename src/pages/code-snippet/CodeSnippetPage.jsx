import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CodeSnippetPage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // Protect the route - redirect to login if not authenticated
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Code Snippets</h1>
      <p>Welcome to your code snippets, {userInfo.name}!</p>
    </div>
  );
};

export default CodeSnippetPage;
