export const storeData = (data) => ({
  type: 'STORE_DATA',
  data
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})