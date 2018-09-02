import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {},
  withCredentials: false
})

const simpleRequest = (url, method, data, headers) => {
  const requestObj = {
    url,
    method,
    data,
    headers: {
      ...headers
    }
  };

  return axiosInstance.request(requestObj)
}

const get = (url, headers = {}) => {
  return simpleRequest(url, "get", null, headers);
}

const post = (url, data, headers = {}) => {
  return simpleRequest(url, "post", data, headers);
}

export const getMainPageConfig = () => {
  return get(`/api/main_page_config`)
    .then(response => response.data)
    .catch(error => console.log('mainPageConfig request error', error))
}

export const getBlogsInOrder = (page, perPage) => {
  return get(`/api/blogs?page=${page}&per_page=${perPage}`)
    .then(response => response.data)
    .catch(error => console.log('getBlogsInOrder error', error))
}

export const getInterestedArticles = () => {
  return get(`/api/articles/show_random`)
    .then(response => response.data)
    .catch(error => console.log('getMaybeInterestedArticles error', error))
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
  return get(`/api/news/${id}`)
      .then(response => response.data)
      .catch(error => console.log('getNewsPost error', error))
}

export const getMediaPost = (id) => {
  return get(`/api/media/${id}`)
    .then(response => response.data)
    .catch(error => console.log('getMediaPost error', error))
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



export const blogsPageConfig = () => {
  return new Promise((resolve, reject) => {
    axios.get(`/api/blogs_page_config`)
      .then(response => {
        resolve(response)
      }).catch(error => reject(error))
  })
}
