import {SEARCH_TERM, BASE_URL, LIMIT_DEFAULT}from '../constants'

export function fetchBusinessInfo(locationTerm) {
  return (dispatch) => {
    var myInit = { method: 'GET',
               headers: {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`},
               mode: 'cors',
               cache: 'default' };
    fetch(`${BASE_URL}?term=${SEARCH_TERM}&location=${locationTerm}&limit${LIMIT_DEFAULT}`, myInit)
    .then(response => response.json())
    .then(resultList =>{
       dispatch(setResultsList(resultList))
     })
  }
}

export function setResultsList(resultList){
  return {
  type: "SET_RESULT_LIST",
  payload: resultList
  }
}

export function setFocus(stream){
  return {
  type: "ADD_FOCUSED_STREAM",
  payload: stream
  }
}

export function resetFocus(){
  return{
    type: "REMOVE_FOCUSED_STREAM"
  }
}
