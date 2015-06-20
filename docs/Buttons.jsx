
import React from 'react'
import Section from './Section.jsx'

class Buttons extends React.Component {

  render () {
    return (
      <Section title='Buttons'>
        <a href='#buttons'
          className='btn'>
          Btn
        </a>
        <a href='#buttons'
          className='btn btn-link'>
          Link Btn
        </a>
        <a href='#buttons'
          className='mr2 btn btn-primary bg-black'>
          Primary Btn
        </a>
        <a href='#buttons'
          className='mr2 btn btn-primary'>
          Primary Btn
        </a>
        <a href='#buttons'
          className='mr2 btn btn-outline'>
          Outline Btn
        </a>
        <a href='#buttons'
          className='btn btn-outline blue'>
          Outline Btn Blue
        </a>
      </Section>
    )
  }

}

export default Buttons

