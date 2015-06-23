
import React from 'react'

class MinimalHeader extends React.Component {

  constructor () {
    super ()
  }

  render () {
    return (
      <header className='py2'>
        <h2 className='h4 m0 mxn1'>
          <a href='http://jxnblk.com'
            className='h5 bold caps compact inline-block px1 color-inherit'>
            Jxnblk
          </a>
          {'/'}
          <a href={this.props.href}
            className='h5 bold caps compact inline-block px1'>
            {this.props.title}
          </a>
        </h2>
      </header>
    )
  }

}

MinimalHeader.propTypes = {
  title: React.PropTypes.string,
  href: React.PropTypes.string,
}

export default MinimalHeader

