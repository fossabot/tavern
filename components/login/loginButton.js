import { WebAuth } from 'auth0-js'

import Button from 'material-ui/Button'

const { PUBLIC_URL } = process.env

const auth0 = new WebAuth({
  domain: 'tavern-lab.auth0.com',
  clientID: 'D5ikUpvpyPMR02BoWUcaYB0OGeiVVP40',
  redirectUri: `${PUBLIC_URL}/login_callback`,
  audience: 'https://tavern-lab.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid'
})

export const LoginButton = () => (
  <Button
    color='inherit'
    onClick={() => auth0.authorize()}
  >Sign In</Button>
)

export default LoginButton
