const scpClient = require('scp2')
const ora = require('ora')
const chalk = require('chalk')
const server = require('./config')
const env = process.env.NODE_ENV
const spinner = ora(`正在部署到${env === 'dev' ? '测试环境' : '正式环境'}`)
const readline = require('readline')
const questions = ['请输入服务器账号： ', '请输入服务器密码： ']
const infoArr = []
let currentIndex = 0
function questionLoop() {
  if (currentIndex !== 2) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(questions[currentIndex], as => {
      infoArr.push(as)
      currentIndex++
      rl.close()
      questionLoop()
    })
  } else {
    spinner.start()
    scpClient.scp(
      'build/',
      {
        host: server[env].host,
        port: server[env].port,
        username: infoArr[0],
        password: infoArr[1],
        path: server[env].path
      },
      function(err) {
        spinner.stop()
        if (err) {
          console.log(chalk.red('发布失败.\n'))
        } else {
          console.log(
            chalk.green(
              'Success! 成功发布到' +
                (env === 'prod' ? '生产' : '测试') +
                '服务器! \n'
            )
          )
        }
      }
    )
  }
}
questionLoop()
