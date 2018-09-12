import React from 'react'
import metadata from './about.json'

export default ({ data }) => (
    <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{metadata.site}</h2>
        <p>
            I’m good enough, I’m smart enough, and gosh darn it, people like me!
        </p>
    </div>
)

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
