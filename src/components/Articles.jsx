import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { topicSelectHandler } from "../api"
import { TopicContext } from "../contexts/TopicContext"
import ArticleCard from "./ArticleCard";
// import { handleTopic } from "../utils/handleTopic";
export default function Articles() {
const navigate = useNavigate();
const { topic, setTopic } = useContext(TopicContext)
const [loading, setLoading] = useState(false)
  
const handleTopic = (event) => {
    topicSelectHandler(event.target.value)
      .then((data) => {
        setTopic(data);
        
      })
      .then(() => navigate(`/articles`))
      .catch((err) => console.log(err));
      console.log(topic)
    setLoading(false)
  };
  if(loading === true) {
    return (
      <p>Loading</p>
    )
  } else {
  return (
    <div>
      <h2>Articles</h2>
      <form className="topic-selector">
        <label htmlFor="topic-dropdown">Search by Topic</label>
        <select id="topic-dropdown" onChange={handleTopic}>
          <option key="All">All</option>
          <option key="cooking" value="cooking">Cooking</option>
          <option key="coding" value="coding">Coding</option>
          <option key="football" value="football">Football</option>
        </select>
      </form>

      <ul className="listedArticles">
        {topic.map((article) => {
          return (
            <li key={article.article_iD}>
              <ArticleCard article={article}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}}
