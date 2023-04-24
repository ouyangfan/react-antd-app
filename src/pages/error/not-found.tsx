import React from 'react'
import { Button, Result } from 'antd'
import { Route, Routes, useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={(e) => navigate('/')}>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
