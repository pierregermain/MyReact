export const JuegoReducer = (state = [], action) => {

  switch (action.type) {
    case "create":
      return [...state, action.payload]

    case "delete":
      return state.filter(juego => juego.id !== action.payload)
      
    default:
      return state;
  }
}
