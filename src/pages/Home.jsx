import React, { useEffect, useState } from 'react'
import './home.css'
import { LoadingOutlined } from '@ant-design/icons'
import { Input, Spin } from 'antd'
import FeedCard from '../components/cards/FeedCard'
import { Button } from 'antd'
import { questions } from '../data'
import { QuestionApi } from '../api/QuestionApi'

const { Search } = Input

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
      <article className='search'>
        <Search
          placeholder='input search text'
          enterButton='Search'
          size='large'
          loading
        />
      </article>
      {loading === true ? (
        <Spin size='large' />
      ) : (
        questions.map((question) => (
          <FeedCard key={question.id} question={question} />
        ))
      )}

      <Button>
        <LoadingOutlined />
        Charger des questions ...
      </Button>
    </section>
  )
}

export default Home
