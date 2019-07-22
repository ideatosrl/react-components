import React from 'react'
import PropTypes from 'prop-types'
import './Switch.scss'

const Switch = props =>
  <label className={`ui-switch ${props.className}`}>
    <input
      className="ui-switch__field"
      type="checkbox"
      name=""
      value="1"
      defaultChecked={props.isChecked}
      onChange={e => props.onChange(e.target.checked)}
    />
    <div className="ui-switch__box">
      <div className="ui-switch__dot"></div>
    </div>
    <div className="ui-switch__text">
      {props.children}
    </div>
  </label>

Switch.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
}

Switch.defaultProps = {
  className: '',
  isChecked: false,
  onChange: () => {},
}

export default Switch
