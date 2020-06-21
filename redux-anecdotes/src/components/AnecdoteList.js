import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const compareVotes = (a, b) => {
  return b.votes - a.votes
}

const AnecdoteList = (props) => {
  const dispatch = useDispatch()

  const upvote = (anecdote) => {
    dispatch(upvoteAnecdote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5000))
  }

  const anecdotesToShow = useSelector(({ anecdotes, filter }) => {
    return anecdotes
      .filter(anecdote => anecdote.content.includes(filter))
      .sort(compareVotes)
  })

  return (
    <div>
      {anecdotesToShow.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => upvote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}


export default AnecdoteList