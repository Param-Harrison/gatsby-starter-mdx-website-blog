import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../tokens'

const Header = styled('header')`
  background: ${colors.rebeccapurple};
  width: 100%;
  padding: 1.5rem 1.0875rem;
  margin-bottom: 1.5rem;
`

const Nav = styled('nav')`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${colors.base}
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}


const Header1 = ({ siteTitle }) => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
            {siteTitle}
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
 }

Header1.propTypes = {
  siteTitle: PropTypes.string,
}

Header1.defaultProps = {
  siteTitle: '',
}

export default Header1
