import React from 'react'
import { connect } from 'react-redux'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const sortByVotes = (anecdotes) => {
  const compare = (a, b) => b.votes - a.votes
  const copyAnecdotes = [...anecdotes]
  return copyAnecdotes.sort(compare)

}
const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    anecdote.votes++
    props.upvoteAnecdote(anecdote.id, anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5000)

  }

  return (
    <div>
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )
      }
    </div>
  )
}

const anecdotesToShow =({anecdotes, filter}) => {
  const anecdotesToDisplay = anecdotes
    .filter(anecdote => anecdote.content.includes(filter))
  return sortByVotes(anecdotesToDisplay)
}


const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  upvoteAnecdote,
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes