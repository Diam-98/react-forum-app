import React, { useEffect, useState } from 'react'
import ResponseCard from '../../components/cards/ResponseCard'
import { UserAPI } from '../../api/UserApi'

const Responses = () => {
  const [responses, setResponses] = useState([])

  const getMyResponses = () => {
    UserAPI.getMyResponses()
      .then((response) => {
        setResponses(response.data.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    getMyResponses()
  }, [])
  return (
    <section className='feed-page'>
      {responses.length > 0 ? (
        responses.map((item) => <ResponseCard key={item.id} response={item} />)
      ) : (
        <p>Vous n'avez repondu a des questions</p>
      )}
    </section>
  )
}

export default Responses
