
interface initialStateInt {
  toDos: any[]
}

const initialState: initialStateInt ={
  toDos: [],
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function toDosReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'GET_TODOS_SUCCESS':
      return {
        ...state,
        toDos: [...payload.results]
      }
    case 'SEARCH_CLEAN_STATE':
      return {
        ...initialState
      }
    default:
      return state;
  }

}