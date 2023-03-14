import React from "react";
import { useContext } from "react";
import { TopicContext } from "../contexts/TopicContext";

export default function ArticleCard({ article }) {
  const previewArticle = article.body.substring(0, 100) + "...";
  const previewDate = article.created_at.substring(0, 10);

  return (
    <div className="article-card">
      <img
        className="article-card-img"
        src={article.article_img_url}
        alt={article.title}
      ></img>
      <h3>{article.title}</h3>
      <p>{previewArticle}</p>
      <p className="article-card-author-info">
        {article.author} posted in #{article.topic} on {previewDate}
      </p>
    </div>
  );
}