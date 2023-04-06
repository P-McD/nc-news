import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleArticleHandler } from "../api";
import "../css/SingleArticle.css";
import Comments from "./Comments";
import Votes from "./Votes";
import Loading from "./Loading";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    singleArticleHandler(article_id).then((data) => {
      setSingleArticle(data);
      setLoading(false);
    });
  }, [article_id]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="background-container">
        <div className="single-article">
          <h2>{singleArticle.title}</h2>
          <img
            src={singleArticle.article_img_url}
            className="single-image"
            alt="{singleArticle.title}"
          />
          <section className="article-info">
            <p className="creator-data">{singleArticle.author}</p>
            <p className="date">{singleArticle.created_at}</p>
            <p className="topic">#{singleArticle.topic}</p>
          </section>
          <p className="body">{singleArticle.body}</p>
          <Votes singleArticle={singleArticle} />
          <Comments />
        </div>
      </div>
    );
  }
}
