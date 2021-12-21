import React from 'react'

import './RandomQuote.css'
import quotes from '../quotes'

function Generator() {
  const x = new Date()
  const date = x.getDate()
  const quoteUse = date % 19
  const returnQuote = quotes[quoteUse].quote
  const returnAuthor = quotes[quoteUse].author
  return { quote: returnQuote, author: returnAuthor }
}

const RandomQuote = () => {
  const returnVal = Generator()

  return (
    <>
      <div className='quote'>
        {returnVal.quote}
        <br />
        <strong>&#8211; {returnVal.author} &#8211;</strong>
      </div>
    </>
  )
}

export default RandomQuote
