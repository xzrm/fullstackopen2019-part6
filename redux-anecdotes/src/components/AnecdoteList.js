import React from 'react'
import { connect } from 'react-redux'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const compareVotes = (a, b) => {
  return b.votes - a.votes
}

const AnecdoteList = (props) => {

  const upvote = (anecdote) => {
    props.upvoteAnecdote(anecdote)
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
            <button onClick={() => upvote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}


// Redux store has state with: anecdotes, filter & notification
const anecdotesToShow = ({ anecdotes, filter }) => {
  const anecdotesToDisplay = anecdotes
    .filter(anecdote => anecdote.content.includes(filter))
    .sort(compareVotes)
  return anecdotesToDisplay
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