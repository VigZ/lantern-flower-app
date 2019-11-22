import * as searchActions from './src/actions/search.js'

const arrayOfObjs = [{name: "John"}, {name: "Joe"}, {name: "Jenn"}]
describe('SearchActions' , () => {
  it('should set the results list with the array of results', () => {
    const payload = arrayOfObjs
    const expectedAction = {
      payload,
      type: "SET_RESULT_LIST"
    }
    expect(searchActions.setResultsList(payload)).toEqual(expectedAction)
  })
})
