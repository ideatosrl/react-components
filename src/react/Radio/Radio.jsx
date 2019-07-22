import React from 'react'
import PropTypes from 'prop-types'
import './Radio.scss'
import Icon from '../Icon/Icon'

const Radio = props =>
  <label className={`ui-radio ${props.className} ${props.icon ? 'ui-radio--custom' : ''}`.trim()}>
    <input name={props.name} onChange={e => props.onChange(e.target.value)} className="ui-radio__field" defaultChecked={props.isChecked} type="radio" value={props.value}/>
    <Icon {...props} className="ui-radio__icon" name={`${props.icon ? props.icon : 'formRadioUnchecked'}`}/>
    <Icon {...props} className="ui-radio__icon" name={`${props.icon ? props.icon : 'formRadioChecked'}`}/>
    <div className="ui-radio__text">
      {props.children}
    </div>
  </label>

Radio.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.obj,
}

Radio.defaultProps = {
  className: '',
  icon: '',
  isChecked: false,
  name: 'unassigned',
  onChange: value => { return value },
  value: 0,
}

export default Radio
