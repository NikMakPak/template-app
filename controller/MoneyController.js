import users from '@/json/users.json'
import cardsExpenses from '@/json/cardsExpenses.json'

export function getUser(userId) {
  return users.find(u => u.id === Number(userId))
}

export function getTotalSum(userId) {
  const user = getUser(userId)
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
  const user = getUser(userId)
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

export function getFinanceGoals(userId) {
  const user = getUser(userId)
  const goals = []
  user.financeGoals.forEach(financeGoal => {
    const categoryId = financeGoal.id
    const goalSum = financeGoal.goalSum
    const userCards = user.cards
    const financeGoalExpenses = []

    userCards.forEach(card => {
      const cardFromCollection = cardsExpenses.find(
        cardFromCollection => cardFromCollection.id === card.id
      )

      if (cardFromCollection) {
        cardFromCollection.expenses.forEach(expense => {
          if (expense.categoryId === categoryId) {
            financeGoalExpenses.push(expense.sum)
          }
        })
      }
    })

    if (financeGoalExpenses.length > 0) {
      const currGoal = {}
      const totalSum = financeGoalExpenses.reduce(
        (sum, current) => sum + current
      )
      currGoal.id = categoryId
      currGoal.name = financeGoal.name
      currGoal.currSum = totalSum
      currGoal.goalSum = goalSum
      goals.push(currGoal)
    }
  })

  return goals
}
