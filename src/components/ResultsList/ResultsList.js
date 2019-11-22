import React from 'react'
import ResultCard from '../ResultCard/ResultCard.js'

const ResultsList = (props) => {
  const resultCards = props.resultsList.map((result)=>{
    return <ResultCard name={result.name}/>
  })
return (
  <div className="resultsList">
    {resultCards}
  </div>
)
}
export default ResultsList
