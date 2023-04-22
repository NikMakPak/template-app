import React from 'react'
import { getFinanceGoals } from '@/controller/MoneyController'

const FinanceGoals = ({ id }) => {
  const goals = getFinanceGoals(id)
  return (
    <div>
      <ul>
        {goals.map(el => (
          <li key={el.id}>{`${el.name}: ${el.currSum} / ${el.goalSum}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default FinanceGoals
