const prefix = 'HOME/'

const actions = {
  TOGGLE_DRAWER: `${prefix}TOGGLE_DRAWER`
}

export const homeActions = {
  ...actions,
  toggleDrawer: (show) => ({
    type: actions.TOGGLE_DRAWER,
    show
  })
}

export const defaultState = {
  showDrawer: false
}

export const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case homeActions.TOGGLE_DRAWER: {
      const { show } = action
      return ({
        ...state,
        showDrawer: show ? show : !state.showDrawer
      })
    }

    default: {
      return { ...state }
    }
  }
}

export default homeReducer
