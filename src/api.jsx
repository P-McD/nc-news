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

export const singleArticleHandler = (articleId) => {
  return api.get(`/articles/${articleId}`).then((res) => {
    return res.data;
  });
};

export const commentsHandler = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data
  })
}


export const signInHandler = (username) => {
  return api.get(`/users`).then((res) => {
    return res.data
  })
}

export const postCommentHandler = ({article_id, user, inputComment}) => {
  return api.post(`/articles/${article_id}/comments`, {username : user.username, body: inputComment}).then((res) => {
    console.log(res)
    return res.data[0]
  }).catch((err) => {
    console.log(err, "<err")
})
}
export const upVoteHandler = ({articleId, voteValue}) => {
  return api.patch(`/articles/${articleId}`, {inc_votes : voteValue})
  .then(({data}) => {
    console.log(data.votes , "<<votes increased api")
    return data.votes
  })
}