export const data = (state = [], action) => {
  switch (action.type) {
    case 'STORE_DATA':
      return action.data
    default:
      return state
  }
}