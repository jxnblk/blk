
import React from 'react'
import Section from './Section.jsx'

class Typography extends React.Component {

  render () {
    return (
      <Section title='Typography'>
        <div className='clearfix mxn2'>
          <div className='sm-col sm-col-6 md-col-5 px2'>
            <h1>Hamburger 1</h1>
            <h2>Hamburger 2</h2>
            <h3>Hamburger 3</h3>
            <h4>Hamburger 4</h4>
            <h5>Hamburger 5</h5>
            <h6>Hamburger 6</h6>
          </div>
          <div className='sm-col sm-col-6 md-col-7 px2'>
            <h3>Prose Object</h3>
            <div className='prose'>
              <p>Bacon ipsum dolor amet spare ribs tongue corned beef, frankfurter strip steak cow beef ribs pork short loin jowl flank bresaola. Ham sirloin beef picanha drumstick. Pork belly pork chuck, turkey meatball venison ham prosciutto. Pastrami pork loin venison turducken kielbasa pork salami tongue. Jowl capicola brisket, drumstick picanha pork loin cow bacon ham.</p>
              <p>Pancetta boudin venison, filet mignon shankle pork swine doner beef t-bone. Cupim meatloaf turducken pork leberkas shankle. Pork loin sirloin bresaola picanha drumstick strip steak pancetta capicola tail chuck swine cow prosciutto landjaeger. Shankle tongue short loin sirloin ham hock. Ball tip landjaeger shank bacon. Pastrami hamburger kielbasa picanha, alcatra turducken boudin brisket tongue shoulder.</p>
              <p>Chicken t-bone beef ribs boudin alcatra corned beef. Kevin cupim porchetta ribeye pork belly leberkas. Turkey strip steak ham porchetta ham hock shoulder leberkas sausage cupim. Hamburger spare ribs shankle shoulder biltong ham, flank turkey ground round cupim ball tip ham hock andouille landjaeger frankfurter.</p>
            </div>
          </div>
        </div>
      </Section>
    )
  }

}

export default Typography

