export default function searchReducer(state = { businessList: [] }, action) {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
    if(action.payload){
      return {...state, businessList: [...state.businessList, action.payload.data[0]]}
    }
    case "LIST_RESULTS":
    return {...state}
    default:
      return state
  }
}
