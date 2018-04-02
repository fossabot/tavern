import PropTypes from 'prop-types'
import getConfig from 'next/config'
import { WebAuth } from 'auth0-js'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import List, { ListItem } from 'material-ui/List'

import { loginActions } from '@reducers/login'

const { publicRuntimeConfig: { PUBLIC_URL } = {} } = getConfig() || {}

const auth0 = new WebAuth({
  domain: 'tavern-lab.auth0.com',
  clientID: 'D5ikUpvpyPMR02BoWUcaYB0OGeiVVP40',
  redirectUri: `${PUBLIC_URL}/login_callback`,
  audience: 'https://tavern-lab.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid'
})

export const LoginDialog = ({
  isOpen,
  toggleDialog,
  googleLoginRequest,
  facebookLoginRequest
}) => (
  <Dialog
    open={isOpen}
    onClose={() => toggleDialog(false)}
  >
    <DialogTitle>Sign In to Tavern</DialogTitle>
    <List>
      <ListItem>
        <Button
          fullWidth
          variant='raised'
          size='large'
          onClick={() => googleLoginRequest()}
        >
          Google
        </Button>
      </ListItem>
      <ListItem>
        <Button
          fullWidth
          variant='raised'
          size='large'
          onClick={() => facebookLoginRequest()}
        >
          Facebook
        </Button>
      </ListItem>
    </List>
  </Dialog>
)

LoginDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired,
  googleLoginRequest: PropTypes.func.isRequired,
  facebookLoginRequest: PropTypes.func.isRequired
}

const mapStateToProps = ({
  login: { isOpen }
}) => ({ isOpen })

const mapDispatchToProps = dispatch => ({
  toggleDialog: show => dispatch(loginActions.toggleDialog(show)),
  googleLoginRequest: () => {
    console.log('googleLoginRequest')
    auth0.authorize()
  },
  facebookLoginRequest: () => {
    console.log('facebookLoginRequest')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)
