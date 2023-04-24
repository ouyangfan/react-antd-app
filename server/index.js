import express from 'express'
import bodyParser from 'body-parser'

import {
  accountList,
  orderList,
  orderDetail,
  orderResourceDetail,
} from './data.js'
import { message } from 'antd'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// test
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/user/login', (req, res) => {
  console.log(req.body)
  const { phone, password } = req.body
  const result = accountList.find(
    (item) => item.phone === phone && item.password === password,
  )
  setTimeout(() => {
    if (result) {
      res.send({
        code: 1,
        data: {
          username: result.username,
          token: result.token,
        },
        message: 'success',
      })
    } else {
      res.send({
        code: 110,
        data: {},
        message: '账号或密码错误',
      })
    }
  }, 500)
})

app.get('/api/order/list', (req, res) => {
  setTimeout(() => {
    res.send({
      code: 1,
      data: { orderList },
      message: 'success',
    })
  }, 300)
})

app.get('/api/tour/order/GetOrderDetail', (req, res) => {
  setTimeout(() => {
    res.send({
      code: 1,
      data: { orderDetail },
      message: 'success',
    })
  }, 300)
})

app.get('/api/tour/order/OrderResourceDetail', (req, res) => {
  setTimeout(() => {
    res.send({
      code: 1,
      data: { orderResourceDetail },
      message: 'success',
    })
  }, 300)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
