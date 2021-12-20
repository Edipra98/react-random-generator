import React from 'react'

import './RandomQuote.css'
import quotes from '../quotes'

function Generator() {
  const d = new Date()
  const date = d.getDate()
  for (var i = 1; i <= 19; i++) {
    if (quotes[i]._id === date % 19) {
      const quoteOut = quotes[i].quote
      const authorOut = quotes[i].author
      return { quote: quoteOut, author: authorOut }
    }
  }
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
