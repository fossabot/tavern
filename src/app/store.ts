const prefix = `App/`

export const AppActions = {
  TOGGLE_DRAWER: `${prefix}TOGGLE_DRAWER`,
  toggleDrawer: (open) => ({
    type: AppActions.TOGGLE_DRAWER,
    open
  }),
  openDrawer: () => ({
    type: AppActions.TOGGLE_DRAWER,
    open: true
  }),
  closeDrawer: () => ({
    type: AppActions.TOGGLE_DRAWER,
    open: false
  })
}

export const initialAppState = {
  isDrawerOpen: false
}

export const AppStore = (state = initialAppState, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE': {
      return {
        ...state,
        isDrawerOpen: false
      }
    }
    case AppActions.TOGGLE_DRAWER: {
      const { open } = action
      return {
        ...state,
        isDrawerOpen: typeof open === 'boolean'? open : !state.isDrawerOpen
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default AppStore
