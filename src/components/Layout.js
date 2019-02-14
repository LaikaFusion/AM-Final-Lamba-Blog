import React from 'react'
import { Link } from 'gatsby'
import Mainmenu  from './Mainmenu'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h2
        className="Mono"
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            textAlign: 'center',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    } else {
      header = (
        <h3
        className="Mono"

          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <React.Fragment>
       <Mainmenu />
        <div
          style={{
     
            maxWidth: '80%',
            padding: `${rhythm(3 / 4)}`,
            backgroundColor: 'lightgrey',
            minHeight: '92vh',
            overflow: 'auto',
            borderRadius: '1.5em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1rem black solid',
            margin: '1em auto'
          }}
        >
          <div>{header}</div>

          <div
            style={{
              flexGrow: 2,
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {children}
          </div>

          <footer>
            © {new Date().getFullYear()}, Built with{" "} 
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
