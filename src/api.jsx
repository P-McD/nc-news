import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-mozs.onrender.com/api",
});

export const topicSelectHandler = (selectedTopic) => {
  const query = selectedTopic === `All` ? `` : `?topic=${selectedTopic}`;
  return api.get(`/articles` + query).then((res) => {
    return res.data;
  });
};
