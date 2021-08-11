import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  p {
    margin-top: 2rem;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  p {
    text-align: center;
    flex: 0 0 100%;
  }
`
export const FooterIcons = styled.div`
  flex: 0 0 100%;
  margin-botton: 2rem;

  img {
    padding: 0 1rem;
    height: 22px;
    object-fit: contain;
    transition: filter 0.3s ease;
  }

  &img:hover,
  &img:focus {
    filter: brightness(50%);
  }
`
