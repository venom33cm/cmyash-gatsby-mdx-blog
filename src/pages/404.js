import React from "react"
import { graphql } from "gatsby"
import { Content, Container, FeatureImage } from "../components"
import { H1 } from "../elements"

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.gatsbyImageData
  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Oops the page your looking is not found
        </H1>
      </Content>
    </Container>
  )
}
export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "error.jpg" } }) {
      gatsbyImageData(layout: FIXED)
    }
  }
`
