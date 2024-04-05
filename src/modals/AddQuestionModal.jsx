import React, { useState } from 'react'
import { Modal, Form, Input } from 'antd'
import { QuestionApi } from '../api/QuestionApi'

const AddQuestionModal = ({
  openAddQuestionModal,
  setOpenAddQuestionModal,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setConfirmLoading(true)
    QuestionApi.addQuestion(values)
      .then((response) => {
        setConfirmLoading(false)
        setOpenAddQuestionModal(false)
      })
      .catch((err) => {
        setConfirmLoading(false)
      })
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
        title='Ajouter une question'
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
          <Form.Item name='title' label='Sujet' rules={[{ required: true }]}>
            <Input placeholder='Donner un titre' />
          </Form.Item>
          <Form.Item
            name='description'
            label='Description'
            rules={[{ required: true }]}
          >
            <Input.TextArea placeholder='Donner une description' />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddQuestionModal
