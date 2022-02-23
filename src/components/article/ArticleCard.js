// This component displays an article

import React from "react"
import "./Article.css"

export const ArticleCard = () => (
  <>
    <section className="article">
        <h2 className="title">Big Bear News</h2>
        <div className="article__url">URL: nbcnews.com/news/us-news/california-authorities-seek-large-furry-suspect-crime-wave-rcna17128</div>
        <div className="article__synopsis">Synopsis: California authorities looking for large, furry suspect in 7-month crime wave</div>
        <div className="article__time">Time: </div>
    </section>
  </> 
)