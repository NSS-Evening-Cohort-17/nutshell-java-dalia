// This component displays an article

import React from "react"
import "./Article.css"

export const ArticleCard = ({ article, handleDeleteArticle }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Title: <span className="card-articletitle">
          {article.title}
        </span></h3>
        <p>Url: {article.url}</p>
        <p>Synopsis: {article.synopsis}</p>
        <p>Time: {article.time}</p>
        <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete Article</button>
      </div>
    </div>
  );
}

