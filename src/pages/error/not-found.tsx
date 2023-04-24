<<<<<<< HEAD
import React from 'react'
import { Button, Result } from 'antd'
import { Route, Routes, useNavigate } from 'react-router-dom'
=======
import React from "react";
import { Button, Result } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
>>>>>>> 0e392ebf7ef388bfcc1f87e2f9eb1e31fdbce4b5

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
<<<<<<< HEAD
      extra={
        <Button type="primary" onClick={(e) => navigate('/')}>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
=======
      extra={<Button type="primary" onClick={(e) => navigate('/my-info/all')}>Back Home</Button>}
    />
  );
};

export default NotFound;
>>>>>>> 0e392ebf7ef388bfcc1f87e2f9eb1e31fdbce4b5
