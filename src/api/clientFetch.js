import axios from 'axios'

export const clientFetch = axios.create({
  baseUrl: 'https://back-for-vue.b.goit.study/api-docs/',
})
