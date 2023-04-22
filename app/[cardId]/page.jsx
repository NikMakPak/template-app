import React from 'react'
import Link from 'next/link'

const Page = ({ params: { cardId } }) => {
  return (
    <>
      <Link href={'/'}>Обратно</Link>
      <h1>{cardId}</h1>
    </>
  )
}

export default Page
