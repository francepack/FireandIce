import { storeData } from './index'

describe('actions', () => {
  it('should return an object with type STORE_DATA', () => {
    const mockData = {name: 'Totally looks like data'}
    const expected = {
      type: 'STORE_DATA',
      data: mockData
    }
    const result = storeData(mockData)
    expect(result).toEqual(expected)
  })
  it('should return an object with type IS_LOADING', () => {
    const mockBool = true
    const expected = {
      type: 'IS_LOADING',
      data: mockBool
    }
    const result = storeData(mockBool)
    expect(result).toEqual(expected)
  })
})