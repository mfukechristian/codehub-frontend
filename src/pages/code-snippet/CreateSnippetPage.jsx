import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateCodeSnippetMutation } from "../../redux/slices/codeSnippetSlice";
import "./CreateSnippetPage.css";

const CreateSnippetPage = () => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  const navigate = useNavigate();
  const [createSnippet, { isLoading }] = useCreateCodeSnippetMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createSnippet({
        title,
        language,
        description,
        code,
      }).unwrap();

      // Small delay to ensure cache invalidation completes
      setTimeout(() => {
        navigate("/code-snippet", { replace: true });
      }, 100);
    } catch (err) {
      alert(err?.data?.message || err.error);
    }
  };

  return (
    <div className="create-snippet-page">
      <form onSubmit={handleSubmit} className="create-snippet-form">
        <h2>Create New Code Snippet</h2>

        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Programming Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            className="code-input"
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/code-snippet")}
          >
            Cancel
          </button>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Snippet"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSnippetPage;
