import 'react'
import { useState, useEffect } from 'react'

export function MCQChallenge({challenge, showExplanation = false}) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [shouldShowExplanation, setShouldShowExplanation] = useState(showExplanation)

  useEffect(() => {
    setSelectedOption(null)
    setShouldShowExplanation(showExplanation)
  }, [challenge, showExplanation])

  const optionsArray = typeof challenge.options === 'string'
    ? Object.entries(JSON.parse(challenge.options))
    : Object.entries(challenge.options)

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return
    setSelectedOption(index)
    setShouldShowExplanation(true)
  }

  const getOptionClass = (index) => {
    if (selectedOption === null) {
      return 'option'
    }
    if (index === challenge.correct_answer_id) {
      return 'option correct'
    }
    if (index === selectedOption && index !== challenge.correct_answer_id) {
      return 'option incorrect'
    }
    return 'option'
  }

  return <div className='challenge-display'>
    <p><strong>Difficulty</strong>: {challenge.difficulty}</p>
    <p className='challenge-title'>{challenge.title}</p>
    <div className='options'>
      {optionsArray.map(([key, value], index) => (
          <div
              className={getOptionClass(index)}
              key={key}
              onClick={() => handleOptionSelect(index)}
          >
            <span className='option-key'>{key}:</span> {value}
          </div>
      ))}
    </div>
    {shouldShowExplanation && selectedOption !== null && (
        <div className='explanation'>
          <h4>Explanation</h4>
          <p>{challenge.explanation}</p>
        </div>
    )}
  </div>
}
