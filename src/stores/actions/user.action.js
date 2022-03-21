import { getUser, postApi } from '../../api/fakeApiUser'

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const fetchUserSuccess = users => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  }
}

export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}

export const login = (user) => {

  console.log("===>",user)

  return async (dispatch) => {
      dispatch({ type: "LOGIN_PROCESSING" })
      try {
          let {data, status } = await postApi('https://onelovelaboratory.com/api/collector/login/process', user)
          
          if (status) {
            console.log("RESPONSE==>",data)
              dispatch({ type: "LOGIN_PROCESSED", payload: data })
           
              return Promise.resolve({ status: true})
          } else {
              dispatch({ type: "LOGIN_PROCESSED", payload: data })
              console.log(data.message)
              return Promise.resolve({ status: false })
          }
      } catch (error) {
          console.log(error);
          dispatch({ type: "CLEAR_PROCESSING" })
      }
  }
}

export const fetchDataUser = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const { data } = await getUser()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}
