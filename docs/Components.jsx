
import React from 'react'
import Section from './Section.jsx'
import Box from './Box.jsx'

import {
  Header,
  Footer,
  AltHeader,
  MinimalHeader,
  CarbonAd
} from '..'


class Components extends React.Component {

  render () {
    let code = {
      header: `<Header title='Header'\n  href='#components'\n  description='Header description'\n  links={links} />`,
    }

    return (
      <Section title='Components'>
        <Box>
          <Header title='Header'
            href='#components'
            description='Header description'
            links={this.props.links} />
          <pre>{`<Header title='Header'\n  href='#components'\n  description='Header description'\n  links={links} />`}</pre>
        </Box>
        <Box>
          <Header title={<div><h1 className='m0'>Subpage</h1><p>para</p></div>}
            href='#components'
            breadcrumbs={[{ href: '#components', text: 'Writing' }]} />
          <pre>{`<Header title={<div><h1 className='m0'>Subpage</h1><p>para</p></div>}\n  href='#components'\n  breadcrumbs={[{ href: '#components', text: 'Writing' }]} />`}</pre>
        </Box>
        <Box>
          <MinimalHeader title='MinimalHeader'
            href='#components' />
          <pre>{`<MinimalHeader title='MinimalHeader'\n  href='#components' />`}</pre>
        </Box>
        <Box>
          <div className='mb2'>
            <CarbonAd />
          </div>
          <pre>{`<CarbonAd />`}</pre>
        </Box>
        <Box>
          <Footer title='Footer'
            href='#components'
            links={this.props.links} />
          <pre>{`<Footer title='Footer'\n  href='#components'\n  links={links} />`}</pre>
        </Box>
      </Section>
    )
  }

}

export default Components

