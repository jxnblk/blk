
import React from 'react'

class AltHeader extends React.Component {

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
        <h2 className='h4 m0 mxn1'>
          <a href='http://jxnblk.com'
            className='inline-block px1 black'>
            Jxnblk
          </a>
          {'/'}
          <a href={this.props.href}
            className='inline-block px1'>
            {this.props.title}
          </a>
        </h2>
        <h1 className='m0'>
          {this.props.pageTitle}
        </h1>
        <div className='mxn1'>
          {this.props.links.map(this.renderLink)}
        </div>
      </header>
    )
  }

}

AltHeader.propTypes = {
  title: React.PropTypes.string,
  pageTitle: React.PropTypes.string,
  href: React.PropTypes.string,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    href: React.PropTypes.string,
  })),
}

AltHeader.defaultProps = {
  links: []
}

export default AltHeader

