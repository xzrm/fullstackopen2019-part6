import React from 'react'
import { useSelector } from 'react-redux'


const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notificationToDisplay = useSelector(state => state.notification)

  return (
    <div>
      {notificationToDisplay === '' ?
        <div></div> :
        <div style={style}>
          {notificationToDisplay}
        </div>
      }
    </div>
  )
}


export default Notification
