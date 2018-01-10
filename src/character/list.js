import { h } from 'preact'
import { route } from 'preact-router'
import { connect } from 'preact-redux'
import Fab from 'preact-material-components/Fab'
import 'preact-material-components/Fab/style.css'

import s from './list.scss'

const render = ({ isFabExit }) => <section>
  <Fab
    ripple={true}
    exited={isFabExit}
    className={s.AddChar}
    onClick={() => route('/character/add')}
  >
    <Fab.Icon>add</Fab.Icon>
  </Fab>
  Characters list
</section>

const mapStateToProps = ({
  app: { isFabExit }
}) => ({
  isFabExit
})

export const CharacterList = connect(mapStateToProps)(render)

export default CharacterList
