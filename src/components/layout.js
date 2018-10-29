import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import gitHubMark from './GitHub-Mark.png'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            ReactiveConf 2018
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            ReactiveConf Prague 2018
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer style={{
          background: '#DDDDDD',
          textAlign: 'center',
          height: '4em',
          padding: '.5em'
        }}>
          <a 
            href="https://github.com/Simply007/ReactiveConfPrague2018"
            style={{
              boxShadow: 'none'
            }}>
            <img 
              src={gitHubMark} 
              alt="gitHub Octocat"
              style={{
                height: '3em',
                padding: '0',
                margin: '0'
                
              }}/>
            </a>
        </footer>
      </div>
    )
  }
}

export default Template
