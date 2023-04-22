'use client'
import React from 'react'
import { useUserIdContext } from '@/app/UserIdProvider'

const CardsInfo = async () => {
  const [id, setId] = useUserIdContext()
  return (
    <section>
      <h1>Средства</h1>
      <div className='total-sum'>
        <h3>Всего:</h3>
        <h2>{id}</h2>
      </div>
    </section>
  )
}

export default CardsInfo
