'use client'
import React from 'react'
import { useUserIdContext } from '@/app/UserIdProvider'
import { getTotalSum } from '@/controller/MoneyController'
import UserCardList from '@/app/UserCardList'
import FinanceGoals from '@/app/FinanceGoals'

const CardsInfo = async () => {
  const [id, setId] = useUserIdContext()

  return (
    <section>
      <h1>Средства</h1>
      <div className='total-sum'>
        <h3>Всего:</h3>
        <h2>{getTotalSum(id) + 'руб'}</h2>
        <UserCardList id={id} />
        <FinanceGoals id={id} />
      </div>
    </section>
  )
}

export default CardsInfo
