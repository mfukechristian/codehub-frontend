import { useParams, useNavigate } from "react-router-dom";
import { useGetCodeSnippetByIdQuery } from "../../redux/slices/codeSnippetSlice";
import "./SnippetDetailPage.css";

const SnippetDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: snippet, isLoading, error } = useGetCodeSnippetByIdQuery(id);

  if (isLoading) {
    return <div className="loading">Loading snippet...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="snippet-detail-page">
      <div className="snippet-detail-container">
        <div className="snippet-header">
          <h1>{snippet.title}</h1>
          <div className="language-tag">{snippet.language}</div>
        </div>

        <p className="description">{snippet.description}</p>

        <div className="code-container">
          <pre>
            <code>{snippet.code}</code>
          </pre>
        </div>

        <div className="snippet-footer">
          <div className="author-info">
            By <span className="author-name">{snippet.author.name}</span>
          </div>
          <button
            className="back-button"
            onClick={() => navigate("/code-snippet")}
          >
            Back to Snippets
          </button>
        </div>
      </div>
    </div>
  );
};

export default SnippetDetailPage;
