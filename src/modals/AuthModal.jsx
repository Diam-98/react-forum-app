import { UploadOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input, Upload, message } from 'antd'
import React, { useState } from 'react'
import { UserAPI } from '../api/UserApi'
import { useAuth } from '../context/AuthProvider'

const AuthModal = ({ open, setOpen }) => {
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [switchForm, setSwitchForm] = useState(1)
  const [form] = Form.useForm()
  const { setUser, setToken } = useAuth()

  const handleSwitchFormLogin = () => {
    setSwitchForm(1)
  }

  const handleSwitchFormRegister = () => {
    setSwitchForm(2)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  const onFinish = (values) => {
    setConfirmLoading(true)

    if (switchForm == 1) {
      UserAPI.login(values)
        .then((response) => {
          setUser(response.data.data.user)
          setToken(response.data.data.token)
          setConfirmLoading(false)
          setOpen(false)
        })
        .catch((err) => {
          console.log(err)
          setConfirmLoading(false)
        })
    } else {
      const image = values.image[0] ? values.image[0].originFileObj : null

      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('email', values.email)
      formData.append('password', values.password)
      formData.append('image', image)

      UserAPI.register(formData)
        .then((response) => {
          console.log(response)
          setConfirmLoading(false)
          setOpen(false)
        })
        .catch((err) => {
          console.log(err)
          setConfirmLoading(false)
        })
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'

    if (!isJpgOrPng) {
      message.error('Seules les images JPG/PNG sont autorisées!')
    }

    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error("L'image doit être inférieure à 2 Mo!")
    }

    return isJpgOrPng && isLt2M
  }
  return (
    <Modal
      title='Connexion'
      open={open}
      onOk={() => form.submit()}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form
        name='basic'
        form={form}
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
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Entrez votre mail!',
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
                  message: 'Entrez votre mot de passe!',
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
              label='Image'
              name='image'
              valuePropName='fileList'
              getValueFromEvent={normFile}
              rules={[{ required: false }]}
            >
              <Upload beforeUpload={beforeUpload} listType='picture'>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
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
  )
}

export default AuthModal
