import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ description, title, url, image, keywords, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.description
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || ["gatsby blog", "gatsby MDX blog"]
        const metaAuthor = author || data.site.siteMetadata.author
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                name: `linkedIn:title`,
                content: metaTitle,
              },
              {
                name: `linkedIn:creator`,
                content: metaAuthor,
              },
              {
                name: `linkedIn:description`,
                content: metaDescription,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `Keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        image
      }
    }
  }
`
