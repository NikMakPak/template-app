import React, { useState } from 'react'
import { getCards } from '@/controller/MoneyController'
import Link from 'next/link'

const UserCardList = ({ id }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [cardId, setCardId] = useState('')
  const [cardName, setCardName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log(`Card ID: ${cardId}, Card Name: ${cardName}`)
    setShowPopup(false)
  }
  const cards = getCards(id)
  return (
    <ul>
      {cards.map(el => (
        <li key={el.cardID}>
          <Link href={`/${el.cardID}`}>
            <h4>{`${el.cardName} - ${el.cardID}: ${el.totalSum}`}</h4>
          </Link>
        </li>
      ))}
      <li>
        <button onClick={() => setShowPopup(true)}>Добавить новую карту</button>
        {showPopup && (
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor='cardId'>Card ID:</label>
              <input
                type='text'
                id='cardId'
                value={cardId}
                onChange={event => setCardId(event.target.value)}
              />
              <br />
              <label htmlFor='cardName'>Card Name:</label>
              <input
                type='text'
                id='cardName'
                value={cardName}
                onChange={event => setCardName(event.target.value)}
              />
              <br />
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
      </li>
    </ul>
  )
}

export default UserCardList
