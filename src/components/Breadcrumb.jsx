
import React from 'react'

class Breadcrumb extends React.Component {

  render () {
    return (
      <span>
        {'/'}
        <a href={this.props.href}
          className='h5 bold caps compact px1 color-inherit'>
          {this.props.text}
        </a>
      </span>
    )
  }

}

Breadcrumb.propTypes = {
  href: React.PropTypes.string,
  text: React.PropTypes.string,
}

export default Breadcrumb

