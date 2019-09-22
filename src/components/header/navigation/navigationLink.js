import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Link } from "react-scroll"
import { Colors, Breakpoints } from "./../../theme/"

export const NavigationLink = ({ children, to }) => (
  <StyledNavigationLink
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    duration={500}
  >
    {children}
  </StyledNavigationLink>
)

const StyledNavigationLink = styled(Link)`
  color: ${Colors.primary};
  font-size: 18px;
  margin-left: 30px;
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;

  :hover, :focus {
    background-size: 100% 2px;
  }

  ${Breakpoints["medium-down"]} {
    margin-bottom: 30px;
    margin-left: 0;
  }
`

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
}
