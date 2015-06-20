
import React from 'react'

class Box extends React.Component {

  render () {
    return (
      <div className='mb3 p3 border rounded'>
        {this.props.children}
      </div>
    )
  }

}

export default Box

