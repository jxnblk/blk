
import React from 'react'

class Chip extends React.Component {

  render () {
    return (
      <div className={'p4 bg-' + this.props.color} />
    )
  }

}

export default Chip

