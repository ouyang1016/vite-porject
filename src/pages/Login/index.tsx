import React from 'react'
import {Form, Input, Button, message} from 'antd'
import { useNavigate } from 'react-router-dom';
import loginImg from '@/assets/images/login.jpg'

import './style.less'

const FormItem = Form.Item

const Login: React.FC = () => {
  const [form] = Form.useForm()
  let navigate = useNavigate();
  const handleOk = () => {
    form.validateFields().then((values) => {
      if (values.name === 'admin' && values.pwd === '123456') {
        navigate('/index')
      } else {
        message.error('用户名或者密码不正确！')
      }
    })
  }

  return (
    <div className="login-box" style={{backgroundImage: `url(${loginImg})`}}>
      <div className="login-content-box">
        <div className="login-title">登录</div>
        <Form
          form={form}
          labelCol={{span: 0}}
          wrapperCol={{span: 24}}
          initialValues={{name: 'admin', pwd: '123456'}}
          onValuesChange={(values, allValues) => {
            console.log(values, allValues)
          }}
        >
          <FormItem name="name" label="">
            <Input autoComplete="off" placeholder="请输入登录名" />
          </FormItem>
          <FormItem name="pwd" label="">
            <Input autoComplete="off" type="password" placeholder="请输入密码" />
          </FormItem>
          <Button style={{marginTop: '24px'}} type="primary" onClick={handleOk} block>
            登录
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login;
