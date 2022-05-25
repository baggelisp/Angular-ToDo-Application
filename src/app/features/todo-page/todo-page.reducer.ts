
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
    case 'CREATE_TODO_SUCCESS':
      return {
        ...state,
        toDos: [...state.toDos,...payload.newToDo]
      }
    case 'UPDATE_TODO_SUCCESS':
      return {
        ...state,
        toDos: [...state.toDos.map( el => el.id === payload.updateToDo.id ? {...payload.updateToDo} : el)]
      }
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        toDos: [...state.toDos.filter( el => el.id !== payload.id)]
      }
    case 'TODOS_CLEAN_STATE':
      return {
        ...initialState
      }
    default:
      return state;
  }

}