import axios from 'axios'

export const simpleRequest = (url, method, data, headers) => {
  const requestObj = {
    url,
    method,
    data,
    headers: {
      ...headers
    }
  };

  return axios(requestObj);
}

export const get = (url, headers = {}) => {
  return simpleRequest(url, "get", null, headers);
}

export const post = (url, data, headers = {}) => {
  return simpleRequest(url, "post", data, headers);
}

export const getArticles = (page) => {
  return axios.get(`/api/articles`, {
      params: {
        page: page
      }
    })
    .then(response => response.data)
    .catch(error => console.log('get articles error', error))
}

export const getTranslatedArticles = (page) => {
  return axios.get(`/api/articles/translated`, {
      params: {
        page: page
      }
    })
    .then(response => response.data)
    .catch(error => console.log('getTranslatedArticles error', error))
}

export const getMedia = (page) => {
  return axios.get(`/api/media`, {
      params: {
        page: page
      }
    })
    .then(response => response.data)
    .catch(error => console.log('getMedia error', error))
}

export const getIndexInOrder = (page) => {
  return axios.get(`/api/all_articles`, {
      params: {
        page: page
      }
    })
    .then(response => response.data)
    .catch(error => console.log('getIndexInOrder error', error))
}

export const getBlogsInOrder = (page) => {
  return axios.get(`/api/blogs`, {
      params: {
        page: page
      }
    })
    .then(response => response.data)
    .catch(error => console.log('getBlogsInOrder error', error))
}

export const getAllTags = () => {
  return get(`/api/tags`)
    .then(response => response.data)
    .catch(error => console.log('getAllTags error', error))
}

export const getNews = (page) => {
  return get(`/api/news`, {
      params: {
        page: page
      }
    })
    .then(response => response.data)
    .catch(error => console.log('getNews error', error))
}

export const getPost = (id) => {
  return get(`/api/articles/${id}`)
    .then(response => response.data)
    .catch(error => console.log('getPost error', error))
}

export const getBlogPost = (id) => {
  return new Promise((resolve, reject) => {
    get(`/api/blogs/${id}`)
      .then(response => {
        resolve(response)
      })
      .catch(reject)
  })
}

export const getNewsPost = (id) => {
  return new Promise((resolve, reject) => {
    get(`/api/news/${id}`)
      .then(response => {
        resolve(response)
      })
      .catch(reject)
  })
}

export const getMediaPost = (id) => {
  return new Promise((resolve, reject) => {
    get(`/api/media/${id}`)
      .then(response => {
        resolve(response)
      })
      .catch(reject)
  })
}

export const getPostsByTag = (id, query) => {
  return new Promise((resolve, reject) => {
    axios.get(`/api/all_articles`, {
      params: {
        tag: query,
        page: id
      }
    }).then(response => {
        resolve(response)
      }).catch(reject)
  })
}

export const searchRequest = (id, query) => {
  return new Promise((resolve, reject) => {
    axios.get(`/api/all_articles`, {
      params: {
        query: query,
        page: id
      }
    }).then(response => {
      resolve(response)
    }).catch(reject)
  })
}

export const tagsMostUsed = () => {
  return new Promise((resolve, reject) => {
    axios.get(`/api/tags/most_used`)
      .then(response => {
        resolve(response)
      }).catch(error => reject(error))
  })
}

export const mainPageConfig = () => {
  return new Promise((resolve, reject) => {
    axios.get(`/api/main_page_config`)
      .then(response => {
        resolve(response)
      }).catch(error => reject(error))
  })
}

export const blogsPageConfig = () => {
  return new Promise((resolve, reject) => {
    axios.get(`/api/blogs_page_config`)
      .then(response => {
        resolve(response)
      }).catch(error => reject(error))
  })
}
