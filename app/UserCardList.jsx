import React from 'react'
import { getCards } from '@/controller/MoneyController'
import Link from 'next/link'

const UserCardList = ({ id }) => {
  const cards = getCards(id)
  return (
    <ul>
      {cards.map(el => (
        <li key={el.cardID}>
          <Link href={`/${el.cardID}`}>
            <h4>{`${el.cardName} - ${el.cardID}`}</h4>
            <span>{el.totalSum}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default UserCardList
