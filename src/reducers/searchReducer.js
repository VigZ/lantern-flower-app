export default function searchReducer(state = { results: [] }, action) {
  switch (action.type) {
    case "SEARCH":
    if(action.payload.data[0]){
      return {...state, activeStreams: [...state.activeStreams, action.payload.data[0]]}
    }
    case "DELETE_ACTIVE_STREAM":
      return {...state, activeStreams: [...state.activeStreams.filter((stream) => stream.id !== action.payload.id)]}
    case "MODIFY_ACTIVE_STREAM":
      return {...state, currentlyViewingData: action.payload}
    case "LIST_RESULTS":
    return {...state}
    default:
      return state
  }
}
