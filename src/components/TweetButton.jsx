
import React from 'react'

class TweetButton extends React.Component {

  render () {
    let text = this.props.text
    let url = this.props.url || null
    let script = {
      __html: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");'
    }

    return (
      <div className="inline-block">
        <a href="https://twitter.com/share"
          className="twitter-share-button"
          data-text={text}
          data-url={url}
          data-via="jxnblk"
          data-size="large">
          Tweet
        </a>
        <script dangerouslySetInnerHTML={script} />
      </div>
    )
  }

}

TweetButton.propTypes = {
  text: React.PropTypes.string
}

export default TweetButton

