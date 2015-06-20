
import React from 'react'
import Avatar from 'jxnblk-avatar'

class Footer extends React.Component {

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
      <footer className='mt3 py3 border-top'>
        <div className='sm-flex flex-baseline flex-wrap mxn1'>
          <a href={this.props.href}
            className='h3 btn btn-narrow btn-link'>
            {this.props.title}
          </a>
          <div className='flex flex-baseline'>
            {this.props.links.map(this.renderLink)}
          </div>
          <div className='flex-auto' />
          <a href='//jxnblk.com' className='btn btn-narrow btn-link'>
            Made by Jxnblk
          </a>
        </div>
      </footer>
    )
  }

}

Footer.propTypes = {
  title: React.PropTypes.string,
  href: React.PropTypes.string,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    href: React.PropTypes.string,
  })),
}

export default Footer

