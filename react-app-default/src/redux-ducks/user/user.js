// https://github.com/erikras/ducks-modular-redux

// Initial State
import initialState from './../../store/initialState'
const { user } = initialState

// Actions
const UPDATE = 'UPDATE_USER'

// Reducer
export default function reducer(state = user, action = {}) {
  switch(action.type) {
    case UPDATE:
      return { ...state, ...action.payload }
      break
    default: return state
  }
}

// Actions Creators
export function updateUser(payload) {
  return {
    type: UPDATE,
    payload,
  }
}
