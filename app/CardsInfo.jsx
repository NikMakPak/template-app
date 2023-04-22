'use client'
import React from 'react'
import { useUserIdContext } from '@/app/UserIdProvider'
import { getTotalSum } from '@/controller/MoneyController'
import UserCardList from '@/app/UserCardList'
import FinanceGoals from '@/app/FinanceGoals'
import Categories from '@/app/Categories'
import styles from '@/app/page.module.scss'

const CardsInfo = async () => {
  const [id] = useUserIdContext()

  return (
    <section>
      <h1>Средства</h1>
      <div className={styles.cardInfo}>
        <h3>Всего:</h3>
        <h2>{getTotalSum(id) + 'руб'}</h2>
        <UserCardList id={id} />
        <FinanceGoals id={id} />
        <Categories id={id} />
      </div>
    </section>
  )
}

export default CardsInfo
