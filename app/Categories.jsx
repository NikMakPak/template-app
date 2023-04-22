import React from 'react'
import { getCategoriesSums } from '@/controller/MoneyController'

const Categories = ({ id }) => {
  const categories = getCategoriesSums(id)
  return (
    <div>
      <h2>Категории:</h2>
      <ul>
        {categories.map((el, i) => (
          <li key={i}>{`${el.categoryName}: ${el.totalSum}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
