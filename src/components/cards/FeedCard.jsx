import React, { useState } from 'react'
import './feedCard.css'
import profile from '../../assets/profile.jpg'
import { EditOutlined } from '@ant-design/icons'
import {  Button, Form, Input } from 'antd'
import ResponseCard from './ResponseCard'
import axiosClient from '../../api/axiosClient'

const FeedCard = ({ question }) => {
  const [clickAnswer, setClickAnswer] = useState(false)
  const [selectedQuestionId, setSelectedQuestionId] = useState(null)
  const [clickAnswerList, setClickAnswerList] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = Form.useForm()

  const showAnswerForm = (id) => {
    setSelectedQuestionId(id)
    setClickAnswer(!clickAnswer)
  }

  const showAnswersList = (id) => {
    setSelectedQuestionId(id)
    setClickAnswerList(!clickAnswerList)
  }

  const onFinish = (values) => {
    setConfirmLoading(true)
    console.log(values)
    console.log(selectedQuestionId)

    axiosClient
      .post(`/question/${selectedQuestionId}}/response`, values)
      .then((response) => {
        console.log(response)
        setConfirmLoading(false)
      })
      .catch((err) => {
        console.log(err.response)
        setConfirmLoading(false)
      })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <article className='feed'>
        <div className='card-top'>
        <h2>{question?.title}</h2>
            <div className='author'>
              <img
                src={
                  question?.author?.image ? question?.author?.image : profile
                }
                alt='author profile'
              />
              <div className='author-info'>
                <span>{question?.author?.name}</span>
                <p>{question?.author?.pseudo}</p>
              </div>
            </div>
        </div>
        <p>{question.description}</p>
        <div className='card-bottom'>
          <Button
            type='link'
            className='card-bottom-item'
            onClick={() => showAnswerForm(question?.id)}
          >
            <EditOutlined />
            <span>Repondre</span>
          </Button>

          <Button type='link' onClick={() => showAnswersList(question.id)}>
            {question?.responses?.length} ont repondu
          </Button>
        </div>
      </article>
      <div
        className={
          selectedQuestionId === question.id && clickAnswer === true
            ? 'answer-form'
            : 'answer-form-hide'
        }
      >
        <Form
          layout='vertical'
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            name='description'
            rules={[
              {
                required: true,
                message: 'Entrez la description de votre commentaire',
              },
            ]}
          >
            <Input.TextArea placeholder='Laisser un commentaire' />
          </Form.Item>
          <Button loading={confirmLoading} onClick={() => form.submit()}>
            Repondre
          </Button>
        </Form>
      </div>
      <div
        className={
          selectedQuestionId === question.id && clickAnswerList == true
            ? 'feed-answers'
            : 'feed-answers-hide'
        }
      >
        {question?.responses?.length > 0 ? (
          question?.responses.map((item) => (
            <ResponseCard key={item.id} response={item} />
          ))
        ) : (
          <p>Pas de reponse a cette question</p>
        )}
      </div>
    </>
  )
}

export default FeedCard
