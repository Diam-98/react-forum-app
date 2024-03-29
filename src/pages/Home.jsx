import React from 'react'
import './home.css'
import { LoadingOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import FeedCard from '../components/cards/FeedCard'
import { Button } from 'antd'
import { questions } from '../data'

const { Search } = Input

const Home = () => {
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

export default Home
