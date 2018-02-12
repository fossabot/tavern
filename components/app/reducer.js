const prefix = 'HOME/'

const actions = {
  TOGGLE_DRAWER: `${prefix}TOGGLE_DRAWER`,
  SET_PAGE_TITLE: `${prefix}SET_PAGE_TITLE`
}

export const appActions = {
  ...actions,
  toggleDrawer: (show) => ({
    type: actions.TOGGLE_DRAWER,
    show
  }),
  setPageTitle: (title) => ({
    type: actions.SET_PAGE_TITLE,
    title
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

    case appActions.SET_PAGE_TITLE: {
      const { title } = action
      return ({
        ...state,
        pageTitle: title
      })
    }

    default: {
      return { ...state }
    }
  }
}

export default appReducer
