import Button from 'material-ui/Button'

export const LoginButton = () => (
  <Button
    color='inherit'
    onClick={() => {
      console.log('Login')
    }}
  >Sign In</Button>
)

export default LoginButton
