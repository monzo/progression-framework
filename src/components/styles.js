// @flow
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarLink from './sidebarLink'

export const Contain = styled.div`
  position: relative;
  overflow-x: hidden;
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

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #f7f7f7;
  color: black;
  overflow-x: hidden;

  &:not(.cover) {
    width: 0;
    transform: translateX(-800px);
    transition: 300ms ease-in-out;
  }
  &:not(.cover).open {
    transform: translateX(0px);
    width: 400px;
    transition: 300ms ease-in-out;
  }
  .cover {
    width: 400px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    margin-left: -400px;
    transition: 300ms ease-in-out;
  }
  .cover.open {
    margin-left: 0;
    transition: 300ms ease-in-out;
  }
  h2 {
    margin-top: 30px;
    margin-left: 40px;
  }
  ul {
    margin-left: 20px;
    list-style-type: none;
  }
  h4 {
    padding-top: 1rem;
  }

  @media all and (max-width: 736px) {
    h2 {
      margin-bottom: 10px;
      margin-left: 20px;
      padding-left: 10px;
      font-size: 2rem;
    }
    ul {
      margin-left: 15px;
      margin-top: 15px;
    }
    &:not(.cover) {
      width: 0;
      transform: translateY(-100vw);
      transition: none;
    }
    &:not(.cover).open {
      transform: translateY(0px);
      width: 100vw;
      transition: none;
    }
    .cover {
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      margin-left: -100vw;
      transition: none;
    }
    .cover.open {
      margin-left: 0;
      transition: none;
    }
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
  padding-top: 30px;
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

  @media all and (max-width: 736px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const StyledLink = styled(SidebarLink)`
  cursor: pointer;
`

export const SpecialListElement = styled.li`
  margin-bottom: 2rem !important;
`

export const SpecialStyledLink = styled(SidebarLink)`
  opacity: 1;
  color: #145d8e;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    color: #145d8e;
  }
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
`

export const ErrorPageLink = styled.a`
  border: 1px solid;
`
