import React, { useEffect, useState } from 'react'
import './home.css'
import { Spin } from 'antd'
import FeedCard from '../components/cards/FeedCard'
import { QuestionApi } from '../api/QuestionApi'

const Home = () => {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = () => {
    QuestionApi.getAllQuestions()
      .then((response) => {
        setQuestions(response.data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <section className='feed-page'>
      
      {loading === true ? (
        <Spin size='large' />
      ) : (
        questions.map((question) => (
          <FeedCard key={question.id} question={question} />
        ))
      )}
    </section>
  )
}

export default Home
