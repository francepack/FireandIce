import * as actions from '../actions'
import { data } from './data'

describe('data reducer', () => {
  it('should do nothing if its action is not called', () => {
    const action = {}
    const initialState = []
    const expected = []
    const result = data(initialState, action)
    expect(result).toEqual(expected)
  })
  it('should update state data', () => {
    const mockData = [{name: 'data1'}, {name: 'data2'}]
    const initialState = []
    const action = actions.storeData(mockData)
    const expected = mockData
    const result = data(initialState, action)
    expect(result).toEqual(expected)
  })
})