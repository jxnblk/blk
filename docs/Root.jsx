
import React from 'react'
import blk from '../src/css/blk.css'

import Typography from './Typography.jsx'
import Buttons from './Buttons.jsx'
import Colors from './Colors.jsx'
import Components from './Components.jsx'

import { Header, Footer } from '..'

class Root extends React.Component {

  render () {
    let links = [
      { text: 'Typography', href: '#typography' },
      { text: 'Buttons', href: '#buttons' },
      { text: 'Colors', href: '#colors' },
      { text: 'Components', href: '#components' },
    ]

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: blk }} />
        </head>
        <body className='px3'>
          <Header {...this.props}
            links={links} />
          <Typography />
          <Buttons />
          <Colors {...this.props} />
          <Components {...this.props}
            links={links} />
          <Footer {...this.props}
            links={links} />
        </body>
      </html>
    )
  }

}

export default Root

