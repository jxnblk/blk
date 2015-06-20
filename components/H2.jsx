
import React from 'react'
import { kebabCase as _kebab } from 'lodash'

class H2 extends React.Component {

  render () {
    let href = '#' + _kebab(this.props.children.toString())
    return (
      <h2>
        <a href={href}>
          {this.props.children}
        </a>
      </h2>
    )
  }

}

export default H2

