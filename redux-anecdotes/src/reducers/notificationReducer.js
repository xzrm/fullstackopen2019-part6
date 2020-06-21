const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET NOTIFICATION':
      return action.notification
    default:
      return state
  }
}


export const setNotification = (message, time) => {
  return dispatch => {
    dispatch(notificationChange(message))
    setTimeout(() => {
      dispatch(notificationChange(''))
    }, time)
  }
}


export const notificationChange = notification => {
  return {
    type: 'SET NOTIFICATION',
    notification: notification
  }
}

export default notificationReducer