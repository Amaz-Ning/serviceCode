const SERVER_LIST = {
  prod: {
    id: 'prod',
    name: '正式环境',
    host: '49.235.161.22',
    port: '22',
    path: '/var/www/html'
  },
  dev: {
    id: 'prod',
    name: '测试环境',
    host: '49.235.161.22',
    port: '22',
    path: '/var/www/html'
  }
}

module.exports = SERVER_LIST
