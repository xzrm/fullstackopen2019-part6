const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET FILTER':
      return action.filter
    default:
      return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET FILTER',
    filter: filter
  }
}

export default filterReducer