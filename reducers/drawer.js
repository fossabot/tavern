const prefix = '@drawer/'

export const TOGGLE_DRAWER = `${prefix}TOGGLE_DRAWER`

export const drawerActions = {
  toggleDrawer: willOpen => ({
    type: TOGGLE_DRAWER,
    willOpen
  })
}

const defaultState = {
  isOpen: false
}

export const drawerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER: {
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

export default drawerReducer
