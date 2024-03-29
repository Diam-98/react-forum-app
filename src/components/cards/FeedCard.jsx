import React, { useState } from 'react'
import './feedCard.css'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile.jpg'
import { EditOutlined, SaveOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Tooltip } from 'antd'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'
import TextArea from 'antd/es/input/TextArea'

const FeedCard = ({ question }) => {
  const [clickAnswer, setClickAnswer] = useState(false)
  const [selectedQuestionId, setSelectedQuestionId] = useState(null)
  const [clickAnswerList, setClickAnswerList] = useState(false)

  const showAnswerForm = (id) => {
    setSelectedQuestionId(id)
    setClickAnswer(!clickAnswer)
  }

  const showAnswersList = (id) => {
    setSelectedQuestionId(id)
    setClickAnswerList(!clickAnswerList)
  }

  return (
    <>
      <article className='feed'>
        <div className='card-top'>
          <div className='left'>
            <h2>{question.title}</h2>
            <Link to='/' className='author'>
              <img src={profile} alt='author profile' />
              <div className='author-info'>
                <span>Diam Diallo</span>
                <p>@diamil-123</p>
              </div>
            </Link>
          </div>
          <div className='save-question'>
            <SaveOutlined className='save-icon'></SaveOutlined>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quis
          magni! Debitis velit esse nam sapiente cum sint accusantium, corporis
          exercitationem harum dignissimos reprehenderit odit totam quasi
          numquam aspernatur dolores?
        </p>
        <div className='card-bottom'>
          <Button
            type='link'
            className='card-bottom-item'
            onClick={() => showAnswerForm(question.id)}
          >
            <EditOutlined />
            <span>Repondre</span>
          </Button>
          <Avatar.Group>
            <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
            <a href='https://ant.design'>
              <Avatar
                style={{
                  backgroundColor: '#f56a00',
                }}
              >
                K
              </Avatar>
            </a>
            <Tooltip title='Ant User' placement='top'>
              <Avatar
                style={{
                  backgroundColor: '#87d068',
                }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{
                backgroundColor: '#1677ff',
              }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
          <Button type='link' onClick={() => showAnswersList(question.id)}>
            18 ont repondu
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
        <Form layout='vertical'>
          <FormItem>
            <TextArea ows={4} placeholder='Ajouter une reponse' />
          </FormItem>
          <Button>Repondre</Button>
        </Form>
      </div>
      <div
        className={
          selectedQuestionId === question.id && clickAnswerList == true
            ? 'feed-answers'
            : 'feed-answers-hide'
        }
      >
        <Link to='/' className='author'>
          <img src={profile} alt='author profile' />
          <div className='author-info'>
            <span>Diam Diallo</span>
            <p>@diamil-123</p>
          </div>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quis
          magni! Debitis velit esse nam sapiente cum sint accusantium, corporis
          exercitationem harum dignissimos reprehenderit odit totam quasi
          numquam aspernatur dolores?
        </p>
      </div>
    </>
  )
}

export default FeedCard
