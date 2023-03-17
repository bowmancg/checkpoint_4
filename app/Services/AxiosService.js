

export const weatherApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
    timeout: 8000
})

export const imgApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
    timeout: 8000
})

export const quoteApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
    timeout: 8000
})

export const todoApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/chandlerbowman/todos',
    timeout: 8000
})