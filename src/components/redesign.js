// @flow
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PartialNavLink from './redesignedPartialNavLink'

export const SidebarReset = styled.div`
  position: static;
  width: 100%;
  height: 100%;
  display: block;
  overflow: auto;
`

export const SidebarScroll = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

export const Contain = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0 !important;
`

export const Content = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Main = styled(Content)`
  padding-top: 0 !important;
  background-color: #ffffff;

  @media all and (max-width: 736px) {
    .container {
      padding-left: 20px;
    }
  }
`

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 100px;
  padding-left: 20px;
  background-color: #14233c;
  color: white;
  text-align: center;

  * {
    margin-top: 0;
  }
  img {
    max-height: 40px;
  }

  @media all and (max-width: 736px) {
    padding-left: 0;
  }
`

export const MobileNavBtn = styled.button`
  margin-left: 20px;
  margin-right: 40px;
`

export const Align = styled.div`
  display: flex;
  justify-content: center;
`

export const PaddedLink = styled.a`
  padding-right: 15px;
`

export const ToolbarLogo = styled.div`
  display: inline-flex;
  margin-right: 20px;
  width: 130px;

  img {
    padding: 10px;
    max-height: 56px;
  }

  .toolbar-fa {
    visibility: visible;
    opacity: 1;
    color: #f7f7f7;
    padding-right: 15px;
    max-width: 45px;
    padding-top: 8px;
  }
  .toolbar-fa:hover {
    opacity: 0.7;
  }

  @media all and (max-width: 736px) {
    margin-right: 20px;

    .toolbar-fa {
      visibility: hidden;
    }
  }
`

export const ToolbarText = styled.img`
  @media all and (max-width: 736px) {
    display: none;
  }
`

export const EmojiListItem = styled.span`
  padding-right: 10px;
`

export const Flexbox = styled.div`
  cursor: pointer;
  display: flex;
`

export const FlexboxPush = styled.div`
  margin: 0 0 0 auto;
  cursor: pointer;
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #f7f7f7;
  color: black;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  width: 19%;
  min-width: 360px;
  h4 {
    padding-top: 0;
    font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
    font-size: 1.3em;
  }

  @media all and (max-width: 736px) {
    width: 0 !important;
    min-width: 0;
    transform: translateX(-100vw);

    &.open {
      width: 100% !important;
      height: 100%;
      align-items: center;
      justify-content: center;
      min-width: 250px;
      transform: none;
    }
  }
`

export const SidebarList = styled.ul`
  margin-top: 0.5em;
  margin-left: 2rem;
  padding-left: 0;
  list-style-type: none;

  ${props =>
    props.main &&
    css`
      width: 70%;
      margin-left: 3.5rem;
      margin-top: 2em;
      @media all and (max-width: 736px) {
        width: 80%;
        margin-left: 10%;
      }
    `}
`

export const SidebarPaddingSection = styled.div`
  ${props =>
    props.borderedBottom &&
    css`
      padding-bottom: 3rem;
    `}
    
  ${props =>
    props.borderedTop &&
    css`
      margin-top: 1.5rem;
    `}

  ${props =>
    props.bottom &&
    css`
      padding-bottom: 2rem;
    `}

  ${props =>
    props.top &&
    css`
      margin-top: 3rem;
    `}
      
  ${props =>
    props.border &&
    css`
      border-bottom: 1px solid #d9d9d9;
    `}
`

export const ScrollbarHeader = styled.div`
  display: flex;
  width: 80%;
  margin-top: 3em;
  margin-left: 3.5rem;
  margin-bottom: 15px;

  @media all and (max-width: 736px) {
    margin-left: 10%;
    margin-bottom: 10px;
  }
`

export const SidebarIcon = styled.img`
  width: auto;
  height: auto;
  max-height: 54.6px;
  max-width: 63px;
  min-width: 39px;

  @media all and (max-width: 736px) {
    max-height: 39px;
    max-width: 45px;
    min-width: 39px;
  }
`

export const CloseIcon = styled.img`
  display: none;

  @media all and (max-width: 736px) {
    display: inherit;
    height: 23px;
    margin-top: 8px;
  }
`

export const SidebarButton = styled.button`
  visibility: hidden;

  @media all and (max-width: 736px) {
    visibility: visible;
    display: block !important;
    align-self: flex-end;
    position: relative;
    margin: 0 auto;
    text-align: center;
    transform: none;
  }
`

export const PaddedFaIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`

export const ButtonContainer = styled.div`
  margin-top: auto;
  padding-top: 3em;
  margin-bottom: 20px;
`

export const CenteredElement = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media all and (max-width: 736px) {
    width: 70% !important;
  }
`

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 736px) {
    height: 100% !important;
    padding-bottom: 100px;
  }
`

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
`

export const DefaultStyledLink = styled(Link)`
  cursor: pointer;
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  color: #14233c !important;
  width: 100%;
  height: 100%;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    color: #145d8e;
  }

  background: inherit;
  padding: 0.5em 0 0.25em 0.5em;
  margin: 0.5em 0 -0.5em -0.5em;

  &.active {
    border-radius: 10px;
    background: #eeefee;
  }
`

export const StyledLink = styled(PartialNavLink)`
  cursor: pointer;
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  color: #14233c !important;
  width: 100%;
  height: 100%;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    color: #145d8e;
  }

  background: inherit;
  padding: 0.5em 0 0.25em 0.5em;
  margin: 0.5em 0 -0.5em -0.5em;

  &.active {
    border-radius: 10px;
    background: #eeefee;
  }
`

export const ListElement = styled.li`
  display: flex;
  margin-top: 4px;
`

export const BtnBarContainer = styled.div`
  align-items: center;

  @media all and (max-width: 768px) {
    text-align: center;
  }
`

export const BtnBarHeader = styled.h3`
  @media all and (max-width: 768px) {
    padding-right: 0 !important;
    margin-left: 10px;
  }
`

export const BtnBarButtonContainer = styled.div`
  margin-left: 10px !important;
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: space-around !important;
  flex-flow: row wrap !important;
  align-items: stretch !important;
  width: 60%;
`

export const BtnBarButton = styled.button`
  flex: 1;
  box-sizing: border-box;
  margin: 10px !important;
  opacity: 0.4;
  outline: none;
  text-decoration: none;
  background-color: ${props => props.inputColour};
  border-color: ${props => props.inputColour};
  color: white;
  &:active,
  &:focus,
  &:hover {
    opacity: 1;
    outline: none;
    text-decoration: none;
    background-color: ${props => props.inputColour};
    border-color: ${props => props.inputColour};
    color: white;
  }
  @media all and (max-width: 768px) {
    flex: 1;
    max-width: 100px;
    max-height: 10px;
    margin-top: 0 !important;
  }
`

export const CustomEmoji = styled.img`
  height: 1em;
  width: auto;
`

export const InlineSecondHeader = styled.h2`
  display: inline;
`

export const ErrorPageHeader = styled.h1`
  font-size: 10rem;
  opacity: 0.4;
`

export const ErrorPageLink = styled.a`
  border: 1px solid;
`
