
import React from 'react'

class GithubButton extends React.Component {

  render () {
    let src = [
      'https://ghbtns.com/github-btn.html?user=',
      this.props.user,
      '&repo=',
      this.props.repo,
      '&type=star&count=true&size=large'
    ].join('')

    return (
      <div className='inline-block'>
        <iframe src={src}
          frameBorder='0'
          scrolling='0'
          width='160px'
          height='30px' />
      </div>
    )
  }

}

GithubButton.propTypes = {
  user: React.PropTypes.string,
  repo: React.PropTypes.string
}

export default GithubButton

