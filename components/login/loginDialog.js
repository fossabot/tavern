import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import List, { ListItem } from 'material-ui/List'

import { loginActions } from '@reducers/login'

export const LoginDialog = ({
  isOpen,
  toggleDialog
}) => (
  <Dialog
    open={isOpen}
    onClose={() => toggleDialog(false)}
  >
    <DialogTitle>Sign In to Tavern</DialogTitle>
    <List>
      <ListItem>
        <Button fullWidth variant='raised' size='large'>
          Google
        </Button>
      </ListItem>
      <ListItem>
        <Button fullWidth variant='raised' size='large'>
          Facebook
        </Button>
      </ListItem>
    </List>
  </Dialog>
)

LoginDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired
}

const mapStateToProps = ({
  login: { isOpen }
}) => ({ isOpen })

const mapDispatchToProps = dispatch => ({
  toggleDialog: show => dispatch(loginActions.toggleDialog(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)
