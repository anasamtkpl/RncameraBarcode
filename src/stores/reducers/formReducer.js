const initialState = {
   
    formDataFirst: null,
  }
  
  export const formReducer = (state = initialState, action) => {
    const { payload } = action

    console.log("payload == >",payload)

    switch (action.type) {
      case 'FORM_DATA_FIRST':
        return {
          ...state,
          formDataFirst:payload
        }

      default:
        return state
    }
  }
  
  export default formReducer
  