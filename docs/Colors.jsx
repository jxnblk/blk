
import React from 'react'
import Section from './Section.jsx'
import Chip from './Chip.jsx'

class Colors extends React.Component {

  render () {
    let colors = this.props.colors
    return (
      <Section title='Colors'>
        <div className='flex flex-wrap mxn2'>
          {this.props.colorNames.map(function(color, i) {
            return (
              <div className='px2' key={i}>
                <Chip color={color} />
              </div>
            )
            })}

        </div>
      </Section>
    )
  }

}

export default Colors

