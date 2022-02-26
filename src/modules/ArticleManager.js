const remoteURL = "http://localhost:8088"

export const getArticleById = (articleId) => {
  //be sure articles have good data and related to a location and customer
  return fetch(`${remoteURL}/articles/${articleId}?_expand=user`)
  .then(res => res.json())
}

export const getAllArticles = () => {
  return fetch(`${remoteURL}/articles`)
  .then(res => res.json())
}

export const deleteArticle = (id) => {
  return fetch(`${remoteURL}/articles/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}