const prefix = '@tavern/'

const actions = {
  TOGGLE_DRAWER: `${prefix}TOGGLE_DRAWER`,
  TOGGLE_LOGIN_DIALOG: `${prefix}TOGGLE_LOGIN_DIALOG`,
  TOGGLE_NAVIGATING: `${prefix}TOGGLE_NAVIGATING`
}

export const appActions = {
  ...actions,
  toggleDrawer: show => ({
    type: actions.TOGGLE_DRAWER,
    show
  }),
  toggleLoginDialog: show => ({
    type: actions.TOGGLE_LOGIN_DIALOG,
    show
  }),
  toggleNavigating: (url, navigating) => ({
    type: actions.TOGGLE_NAVIGATING,
    navigating,
    url
  })
}

export const defaultState = {
  showDrawer: false
}

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case appActions.TOGGLE_DRAWER: {
      const { show } = action
      return ({
        ...state,
        showDrawer: show ? show : !state.showDrawer
      })
    }

    case appActions.TOGGLE_LOGIN_DIALOG: {
      const { show } = action
      return ({
        ...state,
        showLoginDialog: show ? show : !state.showLoginDialog
      })
    }

    case appActions.TOGGLE_NAVIGATING: {
      const { navigating, url } = action
      return ({
        ...state,
        isNavigating: navigating ? navigating : !state.isNavigating,
        navigatingTo: url
      })
    }

    default: {
      return { ...state }
    }
  }
}

export default appReducer
