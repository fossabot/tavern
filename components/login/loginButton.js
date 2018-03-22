import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'

import { loginActions } from '@reducers/login'

export const LoginButton = ({
  toggleDialog
}) => (
  <Button color='inherit' onClick={() => toggleDialog(true)}>Sign In</Button>
)

LoginButton.propTypes = {
  toggleDialog: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  toggleDialog: show => dispatch(loginActions.toggleDialog(show))
})

export default connect(null, mapDispatchToProps)(LoginButton)
