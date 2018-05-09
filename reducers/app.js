const prefix = '@tavern/'

const actions = {
  TOGGLE_NAVIGATING: `${prefix}TOGGLE_NAVIGATING`
}

export const appActions = {
  ...actions,
  toggleNavigating: (url, navigating) => ({
    type: actions.TOGGLE_NAVIGATING,
    navigating,
    url
  })
}

export const defaultState = {
  isNavigating: true,
  navigatingTo: null
}

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
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
