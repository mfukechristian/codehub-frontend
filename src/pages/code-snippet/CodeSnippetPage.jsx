import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetCodeSnippetsQuery } from "../../redux/slices/codeSnippetSlice";
import "./CodeSnippetPage.css";

const CodeSnippetPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { data: snippets, isLoading, error } = useGetCodeSnippetsQuery();

  // Protect the route - redirect to login if not authenticated
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading) {
    return <div className="loading">Loading snippets...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  const handleSnippetClick = (id) => {
    navigate(`/code-snippet/${id}`);
  };

  return (
    <div className="code-snippet-page">
      <div className="snippets-grid">
        {snippets?.map((snippet) => (
          <div
            key={snippet._id}
            className="snippet-card"
            onClick={() => handleSnippetClick(snippet._id)}
          >
            <div className="snippet-header">
              <h3>{snippet.title}</h3>
            </div>
            <p className="description">{snippet.description}</p>
            <div className="snippet-preview">
              <pre>
                <code>{snippet.code.slice(0, 100)}...</code>
              </pre>
            </div>
            <div className="snippet-footer">
              <div className="snippet-meta">
                <span className="author">By {snippet.author.name}</span>
                <span className="language-tag">{snippet.language}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {snippets?.length === 0 && (
        <div className="no-snippets">
          <p>No code snippets found. Create your first one!</p>
        </div>
      )}
    </div>
  );
};

export default CodeSnippetPage;
