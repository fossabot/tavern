import { loginActions } from '@reducers/login'
import Button from 'material-ui/Button'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import List, { ListItem } from 'material-ui/List'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const { publicRuntimeConfig: { PUBLIC_URL } = {} } = getConfig() || {}

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
  },
  facebookLoginRequest: () => {
    console.log('facebookLoginRequest')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)
