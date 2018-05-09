const prefix = '@login/'

export const TOGGLE_DIALOG = `${prefix}TOGGLE_DIALOG`

export const loginActions = {
  toggleDialog: willOpen => ({
    type: TOGGLE_DIALOG,
    willOpen
  })
}

const defaultState = {
  isOpen: false,
  user: null
}

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG: {
      const { willOpen } = action
      return ({
        ...state,
        isOpen: (typeof willOpen === 'undefined')
          ? !state.isOpen
          : willOpen
      })
    }

    default: {
      return {
        ...state
      }
    }
  }
}

export default loginReducer
