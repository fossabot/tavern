import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Dialog, { DialogTitle } from 'material-ui/Dialog'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'

import { appActions } from '@reducers/store'

export const LoginButton = ({
  showLoginDialog = false,
  toggleLoginDialog
}) => (
  <div>
    <Button color='inherit' onClick={() => toggleLoginDialog(true)}>Sign In</Button>
    {
      showLoginDialog
        ? (
          <Dialog
            open={showLoginDialog}
            onClose={() => toggleLoginDialog(false)}
          >
            <DialogTitle>Sign In to Tavern</DialogTitle>
            <List>
              <ListItem>
                <ListItemText primary='Tavern account' secondary='fdsa' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Google' secondary='fdsa' />
              </ListItem>
            </List>
          </Dialog>
        )
        : null
    }
  </div>
)

LoginButton.propTypes = {
  showLoginDialog: PropTypes.bool,
  toggleLoginDialog: PropTypes.func.isRequired
}

LoginButton.defaultProps = {
  showLoginDialog: false
}

const mapStateToProps = ({
  app: { showLoginDialog }
}) => ({ showLoginDialog })

const mapDispatchToProps = dispatch => ({
  toggleLoginDialog: show => dispatch(appActions.toggleLoginDialog(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
