import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const nameUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const getNameUrl = (name) => {
  const request = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
  return request.then(response => response.data)
}

export default {getAll, getNameUrl}