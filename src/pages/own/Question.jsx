import React, { useEffect, useState } from 'react'
import { questions } from '../../data'
import FeedCard from '../../components/cards/FeedCard'
import { Button } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { UserAPI } from '../../api/UserApi'

const Question = () => {
  const [questions, setQuestions] = useState([])

  const getMyQuestions = () => {
    UserAPI.getMyQuestions()
      .then((response) => {
        setQuestions(response.data.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    getMyQuestions()
  }, [])

  return (
    <section className='feed-page'>
      {questions.length > 0 ? (
        questions.map((question) => (
          <FeedCard key={question.id} question={question} />
        ))
      ) : (
        <p>Vous n'avez pas encore de question</p>
      )}

      <Button>
        <LoadingOutlined />
        Charger des questions ...
      </Button>
    </section>
  )
}

export default Question
