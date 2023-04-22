'use client'
import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function UserIdProvider({ children }) {
  // todo: сделать авторизацию
  const [userId, setUserId] = useState('1000')
  return (
    <Context.Provider value={[userId, setUserId]}>{children}</Context.Provider>
  )
}

export function useUserIdContext() {
  return useContext(Context)
}
