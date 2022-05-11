import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.REACT_APP_API
})

axios.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

export default axios
