import React from "react";
import { useContext, useState, useEffect } from "react";
import { topicSelectHandler } from "../api";
import { TopicContext } from "../contexts/TopicContext";
import ArticleCard from "./ArticleCard";
export default function Articles() {
  const { topic, setTopic } = useContext(TopicContext);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("All");

  const handleTopic = (event) => {
    setSelectedTopic(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    topicSelectHandler(selectedTopic)
      .then((data) => {
        setTopic(data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, [selectedTopic, setTopic]);

  if (loading === true) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="articles">
        <div className="article-nav">
          <h2>Articles</h2>
          <form className="topic-selector">
            <label htmlFor="topic-dropdown">Search by Topic: </label>
            <select id="topic-dropdown" onChange={handleTopic}>
              <option key="All">All</option>
              <option key="cooking" value="cooking">
                Cooking
              </option>
              <option key="coding" value="coding">
                Coding
              </option>
              <option key="football" value="football">
                Football
              </option>
            </select>
          </form>
        </div>

        <ul className="listed-articles">
          {topic.map((article) => {
            return (
              <li key={article.article_id} className="article-card">
                <ArticleCard article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
