import React from 'react'
import ResultCard from '../ResultCard/ResultCard.js'

const ResultsList = (props) => {
  const resultCards = props.resultsList.map((result)=>{
    return <ResultCard
      name={result.name}
      imageUrl={result.image_url}
      url={result.url}
      phone={result.display_phone}
      rating={result.rating}
      price={result.price}
      location={result.location}/>
  })
return (
  <div className="resultsList">
    {resultCards}
  </div>
)
}
export default ResultsList
