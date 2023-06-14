import React, { useState } from "react";

const ArticleForm = ({ article = {}, onSubmit }) => {
  const [title, setTitle] = useState(article.title || "");
  const [content, setContent] = useState(article.content || "");
  const [isPrivate, setIsPrivate] = useState(article.isPrivate || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, content, isPrivate };
    onSubmit(newArticle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <label>
        Private:
        <input
          type="checkbox"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;
