import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeaturedImageWrap } from "../elements"
export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "office.jpg" } }) {
        gatsbyImageData(layout: FIXED)
      }
    }
  `)
  return (
    <FeaturedImageWrap>
      <GatsbyImage
        image={fixed ? fixed : data.imageSharp.gatsbyImageData}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeaturedImageWrap>
  )
}
