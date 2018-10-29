import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Ondřej Chrastina`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Ondřej Chrastina</strong> who lives and works in Brno as a Developer Advocate.{' '}
          <a href="https://twitter.com/ChrastinaOndrej">
            You should follow him on Twitter
          </a><br/>
          <a href="https://github.com/Simply007">
            Or on GitHub
          </a><br/>
          <a href="https://github.com/https://medium.com/@Simply007">
            Or even on Medium!
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
