import { LogoutOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import profile from '../../assets/profile.jpg'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [switchForm, setSwitchForm] = useState(1)

  const handleSwitchFormLogin = () => {
    setSwitchForm(1)
  }

  const handleSwitchFormRegister = () => {
    setSwitchForm(2)
  }

  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <header>
      <div className='logo'>
        <h1>
          Connector <span>.</span>
        </h1>
      </div>
      <div className='right'>
        <img src={profile} alt='user profile' />
        <Link to='/' className='user-info'>
          <div className='info'>
            <span>Diam Diallo</span>
            <p>@diamil-123</p>
          </div>
        </Link>
        <div className='logout' onClick={showModal}>
          <LogoutOutlined />
        </div>
      </div>
      <Modal
        title='Connexion'
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name='basic'
          layout='vertical'
          labelCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          {switchForm == 1 && (
            <>
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
              <p>
                Pas de compte ?{' '}
                <Button type='link' onClick={handleSwitchFormRegister}>
                  Creer
                </Button>
              </p>
            </>
          )}
          {switchForm == 2 && (
            <>
              <Form.Item
                label='Name'
                name='name'
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your email',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
              <p>
                Vous avez deja un compte ?{' '}
                <Button type='link' onClick={handleSwitchFormLogin}>
                  Se connecter
                </Button>
              </p>
            </>
          )}
        </Form>
      </Modal>
    </header>
  )
}

export default Header
