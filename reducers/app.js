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
  showDrawer: false,
  showLoginDialog: false,
  isNavigating: true
}

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case appActions.TOGGLE_DRAWER: {
      const { show } = action
      return ({
        ...state,
        showDrawer: (typeof show === 'undefined')
          ? !state.showDrawer
          : show
      })
    }

    case appActions.TOGGLE_LOGIN_DIALOG: {
      const { show } = action
      return ({
        ...state,
        showLoginDialog: (typeof show === 'undefined')
          ? !state.showLoginDialog
          : show
      })
    }

    case appActions.TOGGLE_NAVIGATING: {
      const { navigating, url } = action
      return ({
        ...state,
        isNavigating: (typeof navigating === 'undefined')
          ? !state.isNavigating
          : navigating,
        navigatingTo: url
      })
    }

    default: {
      return { ...state }
    }
  }
}

export default appReducer
