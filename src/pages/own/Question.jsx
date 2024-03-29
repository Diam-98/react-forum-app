import React from 'react'
import { questions } from '../../data'
import FeedCard from '../../components/cards/FeedCard'
import { Button } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Question = () => {
  return (
    <section className='feed-page'>
      {questions.map((question) => (
        <FeedCard key={question.id} question={question} />
      ))}

      <Button>
        <LoadingOutlined />
        Charger des questions ...
      </Button>
    </section>
  )
}

export default Question
