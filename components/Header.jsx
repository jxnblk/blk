
import React from 'react'
import Avatar from 'jxnblk-avatar'

class Header extends React.Component {

  constructor () {
    super ()
    this.renderLink = this.renderLink.bind(this)
  }

  renderLink (link, i) {
    return (
      <a href={link.href}
        key={i}
        className='btn btn-narrow btn-link'>
        {link.text}
      </a>
    )
  }

  render () {
    return (
      <header className='py3'>
        <div className='mxn1'>
          <div className='flex flex-center'>
            <a href='http://jxnblk.com'
              className='h5 bold caps compact flex flex-center px1 black'>
              Jxnblk
            </a>
          </div>
          <h1 className='m0'>
            <a href={this.props.href}
              className='inline-block px1'>
              {this.props.title}
            </a>
          </h1>
        </div>
        <p className=''>{this.props.description}</p>
        <div className='mxn1'>
          {this.props.links.map(this.renderLink)}
        </div>
      </header>
    )
  }

}

Header.propTypes = {
  title: React.PropTypes.string,
  href: React.PropTypes.string,
  description: React.PropTypes.string,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    href: React.PropTypes.string,
  })),
}

export default Header
