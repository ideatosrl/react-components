import React from 'react'
import PropTypes from 'prop-types'
import './Filter.scss'

import Checkbox from '../Checkbox/Checkbox'

const Filter = props =>
  <section className={`ui-filter ${props.className} ${props.isActive ? 'ui-filter--active' : ''}`.trim()}>
    <header className="ui-filter__header">
      <Checkbox sync={true} isChecked={props.isActive} onChange={isChecked => { props.onActivation(isChecked) }}>
        <div className="text-sans text-sans--title">{props.title}</div>
      </Checkbox>
    </header>
    <div className="ui-filter__list">
      {props.children}
    </div>
  </section>

Filter.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onActivation: PropTypes.func,
  title: PropTypes.string,
}

Filter.defaultProps = {
  className: '',
  isActive: false,
  onActivation: () => {},
  title: 'Filter name',
}

export default Filter
