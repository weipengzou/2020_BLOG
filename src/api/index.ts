import axios from 'axios'

const BASE_URL = 'https://www.baidu.com'

export const http = axios.create({
	baseURL: BASE_URL,
})
