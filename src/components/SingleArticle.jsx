import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleArticleHandler } from "../api";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    singleArticleHandler(article_id).then((data) => {
      setSingleArticle(data)
      setLoading(false);
    });
  }, [article_id, singleArticle]);
  if (loading) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div className="main" id="single-article">
        <h2>{singleArticle.title}</h2>
        <img src={singleArticle.article_img_url} className="single-image" alt="{singleArticle.title}" />
        <section className="article-info">
          <p className="creator-data">{singleArticle.author}</p>
          <p className="date">{singleArticle.created_at}</p>
          <p className="topic">#{singleArticle.topic}</p>
        </section>
        <p className="body">{singleArticle.body}</p>
        <button id="vote-button">Votes: {singleArticle.votes}</button>
      </div>
    );
  }
}
