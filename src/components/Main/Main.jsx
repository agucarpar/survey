import React, { useState } from 'react'
import Questions from '../../utils/const/questions'
import './main.scss'

const Main = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [scored, setScored] = useState(0)
    


    const chekingIfCorrect = (isCorrect) => {
        setCurrentQuestion(currentQuestion+1)

        if(isCorrect){
            setScored(scored+1)
        }

    }

    return (
        <div>
            <p className='color'>{Questions[currentQuestion].questionText}</p>
            <div>
                {Questions[currentQuestion].answersOptions.map(answer=>(

                    
                    <button onClick={()=>chekingIfCorrect(answer.isCorrect)}>{answer.answerText}</button>
                        
                    )
                
                )}
            </div>
        </div>
    )
}



export default Main
