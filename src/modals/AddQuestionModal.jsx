import React, { useState } from 'react'
import { Modal, Form, Input } from 'antd'

const AddQuestionModal = ({
  openAddQuestionModal,
  setOpenAddQuestionModal,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values:', values)
    setConfirmLoading(true)
    setTimeout(() => {
      setOpenAddQuestionModal(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const validateMessages = {
    required: '${label} est requis!',
  }

  return (
    <>
      <Modal
        title='Modal 1000px width'
        centered
        open={openAddQuestionModal}
        onOk={() => form.submit()}
        confirmLoading={confirmLoading}
        onCancel={() => setOpenAddQuestionModal(false)}
        width={1000}
      >
        <Form
          form={form}
          layout='vertical'
          name='myForm'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
        >
          <Form.Item name='title' label='Title' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='description'
            label='Description'
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddQuestionModal
