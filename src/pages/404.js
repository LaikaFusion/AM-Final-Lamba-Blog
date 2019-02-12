import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <div
        style={{
          display: 'flex',
          height: '92vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SEO title="404: Not Found" />
        <div
          style={{
            fontSize: '128px',
            backgroundColor: 'lightgray',
            padding: '2rem',
            border: '1rem black solid',
            borderRadius: '3rem',
          }}
        >
          404
        </div>
      </div>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
