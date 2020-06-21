import anecdoteService from '../services/anecdotes'


const reducer = (state = [], action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'NEW ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'UPVOTE':
      const upvotedAnecdote = action.data
      return state.map(anecdote =>
        anecdote.id !== upvotedAnecdote.id
          ? anecdote
          : upvotedAnecdote)
  }
  return state
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW ANECDOTE',
      data: newAnecdote
    })
  }
}

export const upvoteAnecdote = (id, anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(id, anecdote)
    dispatch({
      type: 'UPVOTE',
      data: updatedAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer