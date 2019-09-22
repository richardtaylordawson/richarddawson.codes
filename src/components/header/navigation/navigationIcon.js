import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useTheme, Themes } from "./../../../context/theme/"

export const NavigationIcon = ({ src, alt }) => {
  const [theme, setTheme] = useTheme()
  const setNewTheme = () => {
    if(theme.key === "light") {
      setTheme(Themes.dark)
    } else {
      setTheme(Themes.light)
    }
  }

  return <StyledNavigationIcon onClick={() => setNewTheme()} src={src} alt={alt} />
}

const StyledNavigationIcon = styled.img`
  margin-left: 30px;
  cursor: pointer;
`

NavigationIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
