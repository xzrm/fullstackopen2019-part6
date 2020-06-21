import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {

  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    const input = event.target.value
    props.filterChange(input)
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default connect(
  null,
  { filterChange }
)(Filter)