
import React from 'react'
import Avatar from 'jxnblk-avatar'
import Breadcrumb from './Breadcrumb'

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
    let title = false
    let description = this.props.description ? (<p className='h3 m0 px1'>{this.props.description}</p>) : false
    if (typeof this.props.title === 'string') {
      title = (
        <h1 className='m0'>
          <a href={this.props.href}
            className='inline-block px1'>
            {this.props.title}
          </a>
        </h1>
      )
    } else {
      title = <div className='px1'>{this.props.title}</div>
    }

    return (
      <header className='py3 sm-flex flex-wrap flex-center'>
        <div className='flex-auto mxn1'>
          <div className=''>
            <a href='http://jxnblk.com'
              className='h5 bold caps compact px1 color-inherit'>
              Jxnblk
            </a>
            {this.props.breadcrumbs.map(function(breadcrumb, i) {
              return <Breadcrumb key={i} {...breadcrumb} />
            })}
          </div>
          {title}
          {description}
        </div>
        <div className='mxn1'>
          {this.props.links.map(this.renderLink)}
        </div>
      </header>
    )
  }

}

Header.propTypes = {
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  href: React.PropTypes.string,
  description: React.PropTypes.string,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    href: React.PropTypes.string,
  })),
  breadcrumbs: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    href: React.PropTypes.string,
  }))
}

Header.defaultProps = {
  links: [],
  breadcrumbs: []
}

export default Header
