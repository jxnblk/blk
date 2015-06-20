
import React from 'react'
import Section from './Section.jsx'
import Chip from './Chip.jsx'

class Colors extends React.Component {

  render () {
    console.log('PROPS', this.props)
    let colors = this.props.colors
    return (
      <Section title='Colors'>
        <div className='flex flex-wrap mxn2'>
          {this.props.colorNames.map(function(color) {
            return (
              <div className='px2'>
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

