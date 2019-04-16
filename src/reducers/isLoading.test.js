import * as actions from '../actions'
import { isLoading } from './isLoading'

describe('', () => {
  it('should do nothing if its action is not called', () => {
    const action = {}
    const initialState = []
    const expected = []
    const result = isLoading(initialState, action)
    expect(result).toEqual(expected)
  })
  it('should updated state isLoading', () => {
    const initialState = false
    const mockBool = true
    const action = actions.isLoading(mockBool)
    const expected = mockBool
    const result = isLoading(initialState, action)
    expect(result).toEqual(expected)
  })
})