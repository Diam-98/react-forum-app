import React from 'react'
import ResponseCard from '../../components/cards/ResponseCard'
import { questions } from '../../data'

const Responses = () => {
  return (
    <section className='feed-page'>
      {questions.map((item) => (
        <ResponseCard key={item.id} />
      ))}
    </section>
  )
}

export default Responses
