import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import http from '@/plugins/axios'
import styles from './index.module.less'
import { useSelector, useAppDispatch } from '@/redux/hooks'
import { setUserName, setToken } from '@/redux/user/slice'

export const LoginForm: React.FC = () => {
  const navigate = useNavigate()

  // const username = useSelector((s) => s.user.username)
  const [logLoading, setLogLoading] = useState(false)
  const dispatch = useAppDispatch()
  const onFinish = (values: any) => {
    const { phone, password } = values
    setLogLoading(true)
    http
      .post('/api/user/login', { phone, password })
      .then((res: any) => {
        const { username, token } = res.data
        dispatch(setUserName({ username }))
        dispatch(setToken({ token }))
        // 跳转
        navigate('/vacations')
      })
      .finally(() => {
        setLogLoading(false)
      })
  }

  return (
    <>
      <h2 style={{ paddingBottom: '20px' }}>携程账号登录</h2>
      <Form
        name="normal_login"
        className={styles['login-form']}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Please input your phone!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Phone"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles['login-form-button']}
            loading={logLoading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
