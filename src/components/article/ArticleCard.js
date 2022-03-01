// This component displays an article

import React from "react"
import "./Article.css"

export const ArticleCard = ({ article, handleDeleteArticle }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Title: <span className="card-articletitle">
          {article.title}
        </span></h1>
        <h2>Posted by: {article.user.name}</h2>
        <p>Synopsis: {article.synopsis}</p>
        <p>URL: {article.url}</p>
        <p>Timestamp: {article.dateTime}</p>
        <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete Article</button>
      </div>
    </div>
  );
}

