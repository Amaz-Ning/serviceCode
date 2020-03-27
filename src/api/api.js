const axios = require('axios')

function getUserInfo() {
    return axios.get('http://localhost:9000', {
        username: 'wangning',
        password: '123'
    })
}

module.exports = {
    getUserInfo
}
