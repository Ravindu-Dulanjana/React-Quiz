import React from 'react'
import FlashCard from './FlashCard'

function FlashCardList({Card}) {
  return (
    <div className="card-grid">
      {Card.map(flashCard => {
          return <FlashCard flashcard ={flashCard} key={flashCard.id}/>
      })}
    </div>
  )
}

export default FlashCardList
