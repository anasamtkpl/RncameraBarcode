export const formDataFirst = data => {
  console.log(" action data==>",data)
  return {
    type: 'FORM_DATA_FIRST',
    payload: data
  }
}
