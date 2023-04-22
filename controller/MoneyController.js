import users from '@/json/users.json'
import cardsExpenses from '@/json/cardsExpenses.json'

export function getUser(userId) {
  return users.find(u => u.id === Number(userId))
}

export function getTotalSum(userId) {
  let user = getUser(userId)
  let sum = 0
  user.cards.forEach(card => {
    const cardExpense = cardsExpenses.find(ce => ce.id === Number(card.id))
    if (cardExpense) {
      cardExpense.expenses.forEach(expense => {
        sum += expense.sum
      })
    }
  })

  return sum
}

export function getCards(userId) {
  let user = getUser(userId)
  let cards = []
  user.cards.map(card => {
    const cardExpense = cardsExpenses.find(ce => ce.id === card.id)
    let sum = 0
    if (cardExpense) {
      cardExpense.expenses.forEach(expense => {
        sum += expense.sum
      })
    }
    cards.push({ cardName: card.name, cardID: card.id, totalSum: sum })
  })

  return cards
}
