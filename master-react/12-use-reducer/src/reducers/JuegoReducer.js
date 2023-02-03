export const JuegoReducer = (state = [], action) => {

  switch (action.type) {
    case "create":
      return [...state, action.payload]

    case "delete":
      
    default:
      return state;
  }
}
