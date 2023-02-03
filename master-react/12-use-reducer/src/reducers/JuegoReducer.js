export const JuegoReducer = (state = [], action) => {

  switch (action.type) {
    case "create":
      return [...state, action.payload]

    case "delete":
      return state.filter(juego => juego.id !== action.payload)

    case "edit":
      let index = state.findIndex(juego => juego.id === action.payload.id);
      state[index] = action.payload;

      return [...state]
      
    default:
      return state;
  }
}
