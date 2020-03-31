import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby'


import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong> who loves teaching and
              building useful things.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                Feel free to follow me on Twitter
              </a>
            </p>
            <a href="https://square.site/book/D50HHB11T6G6W/chris-bridges">
              <button 
              style={{
                backgroundColor: '#03A9DB', 
                color: 'white', 
                height: 40,
                // textTransform: uppercase,
                // fontFamily: 'Square Market', 'helvetica neue', 'helvetica', 'arial', 'sans-serif', 
                // letter-spacing: 1px, 
                // line-height: 38px, 
                // padding: 0 28, 
                // border-radius: 3px, 
                // font-weight: 500, 
                fontSize: 14, 
                // cursor: pointer, 
                display: 'block'
              }}>Learn with Me</button>
            </a>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
