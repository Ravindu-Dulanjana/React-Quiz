import React,{ useState } from 'react'

function FlashCard({flashcard}) {
   const[flip,setFlip] = useState(false)

  return (
    <div 
    className ={`card ${flip ? 'flip' :''}`}
    onClick={() => setFlip(!flip)}
    >
        <div className="front">
            {flashcard.Question}
            <div className="flashcard_options">
                {flashcard.option.map(option => {
                    return <div className="flashcard_option" key={option}>{option}</div>
                })}
            </div>

        </div>
        <div className="back">{flashcard.Answer}</div>
    
    </div>
  )
}



export default FlashCard
