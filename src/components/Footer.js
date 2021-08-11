import React from "react"
import { FooterWrapper, FooterSocialWrapper, FooterIcons, P } from "../elements"
import { useStaticQuery, graphql } from "gatsby"
export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.png" }) {
        publicURL
      }

      instagram: file(relativePath: { eq: "instagram.png" }) {
        publicURL
      }

      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterIcons>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook logo" />
          </a>

          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>

          <a
            href="http://linkedIn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin logo" />
          </a>
        </FooterIcons>
        <P size="xSmall">made with ❤️ Yash C M</P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
