import React from 'react'
import { useDispatch  } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const dispatch = useDispatch()

  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    const input = event.target.value
    dispatch(filterChange(input))
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter