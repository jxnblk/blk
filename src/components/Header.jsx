
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
    let breadcrumb = false
    if (this.props.breadcrumb) {
      breadcrumb = (
        <span>
          {'/'}
          <a href={this.props.breadcrumb.href}
            className='h5 bold caps compact px1 black'>
            {this.props.breadcrumb.text}
          </a>
        </span>
      )
    }
    return (
      <header className='py3 sm-flex flex-wrap flex-center'>
        <div className='flex-auto mxn1'>
          <div className=''>
            <a href='http://jxnblk.com'
              className='h5 bold caps compact px1 black'>
              Jxnblk
            </a>
            {breadcrumb}
          </div>
          <h1 className='m0'>
            <a href={this.props.href}
              className='inline-block px1'>
              {this.props.title}
            </a>
          </h1>
          <p className='h3 m0 px1'>{this.props.description}</p>
        </div>
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
  breadcrumb: React.PropTypes.shape({
    text: React.PropTypes.string,
    href: React.PropTypes.string,
  })
}

Header.defaultProps = {
  links: []
}

export default Header
