import React, { useState, useEffect } from 'react';
import { ArticleCard } from './ArticleCard';
import { getAllArticles, getArticleById } from '../../modules/ArticleManager';

export const ArticleList = () => {
  // The initial state is an empty array
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    // After the data comes back from the API, we use the setArticles function to update state
    return getAllArticles().then(articlesFromAPI => {
      setArticles(articlesFromAPI)
    });
  };

  // Got the articles from the API on the component's first render
  useEffect(() => {
    getArticles();
  }, []);

  // Finally we use .map() to "loop over" the articles array to show a list of article cards
  return(
    <div className="container-cards">
      {articles.map(article =>
        <ArticleCard key={article.id} article={article} />
      )}
    </div>
  );
};