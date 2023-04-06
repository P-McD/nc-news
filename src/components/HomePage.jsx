import React, { useContext } from "react";
import {Link} from "react-router-dom"
import "../css/HomePage.css";
import { UserContext } from "../contexts/UserContext";
import NewsCarousel from "./NewsCarousel";

export default function HomePage() {
  const slides = [
    {
      src: "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      link: "/articles/34",
    },
    {
      src: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?w=700&h=700",
      title: "Sweet potato & butternut squash soup with lemon & garlic toast",
      link: "/articles/25",
    },
    {
      src: "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
      title: "The battle for Node.js security has only begun",
      link: "/articles/12",
    },
    {
      src: "https://images.pexels.com/photos/906073/pexels-photo-906073.jpeg?w=700&h=700",
      title: "Defensive Metrics: Measuring the Intensity of a High Press",
      link: "/articles/22",
    },
  ];
  const { user } = useContext(UserContext);

  return (
    <div className="homepage">
      {user.username ? (
        <div className="user-homepage">
          <img className="homepage-avatar" src={user.avatar_url} alt={user.username} />
          <p className="user-greeting">Welcome {user.username}!</p>
        </div>
      ) : (
        <>
          <p className="user-greeting">Welcome Guest!</p>
        </>
      )}
      <div className="homeEditorWrapper">
        <h2>Editor's Picks</h2>
        <div className="homeCarouselWrapper">
          <NewsCarousel slides={slides} />
        </div>
      </div>
      <div>
      <p>Want to read more? <Link to="/articles" id="home-read-more">Click here to browse all articles!</Link></p>
      </div>
    </div>
  );
}
