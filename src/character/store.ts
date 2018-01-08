const PREFIX = 'Character/'

export const CharacterActions = {
  ADD_CHAR: `${PREFIX}ADD_CHAR`
}

export const CharactersStore = (state, action) => {
  switch (action.type) {
    case CharacterActions.ADD_CHAR: {
      const { character } = action
      return {
        ...state,
        [character.id]: character
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default CharactersStore
