import cx from 'classnames'
import { ListItem } from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import s from './drawer.scss'

export const MenuItem = ({ Icon, title, isActive, isLoading }) => (
  <ListItem className={cx(s.item, { [s.itemActive]: isActive })}>
    {isLoading
      ? <CircularProgress
        color='inherit'
        className={s.itemLoading}
        size={26}
      />
      : null
    }
    <Icon color={isActive ? 'disabled' : 'primary'} className={cx(s.itemIcon)} />
    <Typography>{title}</Typography>
  </ListItem>
)

MenuItem.propTypes = {
  Icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default MenuItem
