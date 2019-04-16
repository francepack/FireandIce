import React from 'react'
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { isLoading, storeData } from '../../actions'

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should return an object with desired pieces of state', () => {
      const initialState = {
        data: [],
        isLoading: false,
        otherState: [],
        yetAnotherState: {}
      }
      const expected = {
        data: [],
        loading: false
      } 
      const result = mapStateToProps(initialState)
      expect(result).toEqual(expected)
    })
  })
  describe('mapDispatchToProps', () => {
    it('should change loading status', () => {
      const mockBool = true
      const mockDispatch = jest.fn()
      const actionToDispatch = isLoading(mockBool)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.isLoading(mockBool)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
    it('should store data', () => {
      const mockData = {name: 'I am data'}
      const mockDispatch = jest.fn()
      const actionToDispatch = storeData(mockData)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.storeData(mockData)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})