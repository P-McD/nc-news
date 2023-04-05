import React, { useContext } from "react";
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
        <p className="user-greeting">Welcome {user.username}!</p>
      ) : (
        <p className="user-greeting">Welcome Guest!</p>
      )}
      <div className="homeEditorWrapper">
        <h3>Editor's Picks</h3>
        <div className="homeCarouselWrapper">
          <NewsCarousel slides={slides} />
        </div>
      </div>
    </div>
  );
}
