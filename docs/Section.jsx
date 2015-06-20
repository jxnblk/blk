
import React from 'react'
import { kebabCase as _kebab } from 'lodash'
import H2 from './H2.jsx'

class Section extends React.Component {

  render () {
    let id = _kebab(this.props.title)
    return (
      <section id={id}
        className='py4'>
        <H2>
          {this.props.title}
        </H2>
        {this.props.children}
      </section>
    )
  }

}

export default Section

