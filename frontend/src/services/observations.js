import axios from 'axios'

const baseUrl = 'https://birdnation.herokuapp.com/api/observations'

  axios.interceptors.request.use(function (config) {
    if (config.method === 'post' && !navigator.onLine) {
        window.dispatchEvent(new CustomEvent('axios', { detail: config }))
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
const config = () => {
    return {
        headers: { 'Content-Type': 'Application/json' }
    }
}
const getAll = async () => {
    const response = await axios.get(baseUrl, config())
    return response.data
}

const getOne = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`, config())
    return response.data
}

const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject, config())
    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`, config())
    return response
}

export default { getAll, create, remove, getOne }