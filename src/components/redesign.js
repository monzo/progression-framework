// @flow
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PartialNavLink from './redesignedPartialNavLink'

export const PrimaryView = styled.div`
  height: 100%;
  position: relative;
  padding: 3em 5em;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  @media all and (max-width: 736px) {
    padding: 5% 1em 2em 1em;
  }
`

export const DescriptionView = styled(PrimaryView)`
  padding-top: 10%;

  @media all and (max-width: 736px) {
    padding-top: 5%;
  }
`

export const MarkdownContent = styled.div`
  * {
    font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif !important;
  }
  h2 {
    margin-top: 0.2em;
  }
`

export const Card = styled.div`
  position: relative;
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 0 2em 0.1em rgba(0, 0, 0, 0.1);
  padding: 1.3em;
`

export const FrameworkWrapper = styled.div`
  column-count: 3;
  column-gap: 2em;
  width: 100%;
  margin: 2em auto;

  @media all and (max-width: 736px) {
    display: block;
  }

  //display: grid;
  //grid-template-columns: 1fr 1fr 1fr;
  //grid-gap: 10px 2em;
`

export const FrameworkCard = styled(Card)`
  position: relative;
  margin-top: 0;
  margin-bottom: 1em;
`

export const FrameworksRow = styled.div`
  margin-top: 0;
  width: 10%;

  @media all and (max-width: 736px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`

export const Subtitle = styled.h3`
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 600;
  color: #707b8c;

  ${props =>
    props.small &&
    css`
      font-size: 1.6em;

      @media all and (max-width: 736px) {
        font-size: 1.4em;
      }
    `}
`

export const CardList = styled.ul`
  padding-left: 0.5em;
  width: 95%;
`

export const CardTitle = styled.p`
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 600;
  color: #14233c;
  margin-top: 0;
  font-size: 1.4rem;
`

export const CardSubtitle = styled.h4`
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 600;
  color: #707b8c;
  margin-top: 0;
`

export const LevelsSubtitle = styled(Subtitle)`
  float: right;

  @media all and (max-width: 736px) {
    float: left;
    padding-right: 1em;
  }
`

export const FrameworkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;

  @media all and (max-width: 736px) {
    display: block;
  }
`

export const FrameworkTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardTitleGroup = styled.div`
  margin-top: 0.2em;
`

export const Title = styled.h1`
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 600;
  color: #14233c;
  margin-top: 0;

  ${props =>
    props.small &&
    css`
      font-size: 2em;

      @media all and (max-width: 736px) {
        font-size: 1.6em;
      }
    `}
`

export const Toolbar = styled.div`
  display: none;
  width: 0;
  visibility: hidden;

  @media all and (max-width: 736px) {
    padding: 1.5rem 1.2rem 1.5rem;
    display: flex;
    visibility: inherit;
    height: 4.5em;
    width: 100%;
    background: #f7f7f7;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  }
`

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

export const DescriptionIllustration = styled.img`
  height: 60vh;
  position: absolute;
  bottom: 0;
  right: 0;

  @media all and (max-width: 736px) {
    display: none;
  }
`

export const Description = styled.div`
  position: relative;
  color: #34495e;
  width: 65%;
  z-index: 1;

  @media all and (max-width: 736px) {
    margin-bottom: 3em;
    width: 95%;
  }
`

export const DescriptionText = styled.p`
  margin-top: 24px;
  line-height: 1.3em;
  font-weight: 500;
  font-size: 1.5em;

  @media all and (max-width: 736px) {
    font-size: 1.2em;
    font-weight: 500;
  }
`

export const Wrapper = styled.div`
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  margin-top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100% !important;
`

export const Content = styled(Wrapper)`
  padding-top: 0 !important;
  background-color: #ffffff;
  height: auto;

  @media all and (max-width: 736px) {
    .container {
      padding-left: 20px;
    }
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

export const ToolbarPushWrapper = styled(FlexboxPush)`
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 100% !important;
    height: 100%;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    transform: none;
  }
`

export const SidebarList = styled.ul`
  flex: 1 0 auto;
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
      margin-bottom: 3em;
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

export const ToolbarIcon = styled.img`
  width: auto;
  height: auto;

  @media all and (max-width: 736px) {
    max-height: 26.25px;
    max-width: 30px;
  }
`

export const MenuIcon = styled.img`
  width: auto;
  height: auto;

  @media all and (max-width: 736px) {
    display: inherit;
    margin-top: 0;
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
  background: inherit;
  padding: 0.5em 0 0.25em 0.5em;
  margin: 0.5em 0 -0.5em -0.5em;

  &:hover {
    opacity: 0.7;
    color: #145d8e;
  }
  &:focus {
    outline: none;
  }
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
  background: inherit;
  padding: 0.5em 0 0.25em 0.5em;
  margin: 0.5em 0 -0.5em -0.5em;

  &:hover {
    opacity: 0.7;
    color: #145d8e;
  }
  &:focus {
    outline: none;
  }
  &.active {
    border-radius: 10px;
    background: #eeefee;
  }
`

export const ListElement = styled.li`
  display: flex;
  margin-top: 4px;
`

export const LevelsContainer = styled.div`
  width: 15%;
  margin-top: 0;
  align-items: center;

  @media all and (max-width: 768px) {
    display: flex;
    width: 100%;
    margin-top: 1em;
    text-align: center;
    align-items: center;
  }
`

export const BtnBarHeader = styled.h3`
  color: #707b8c;
  text-align: right;
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;

  @media all and (max-width: 768px) {
    padding-right: 0 !important;
    margin-left: 10px;
  }
`

export const LevelsTextWrapper = styled.div`
  display: inline-flex;
  margin-left: 0;
  margin-top: 0;
  width: 100%;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
`

export const LevelsText = styled.h2`
  cursor: pointer;
  margin-top: 0;
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  opacity: 0.25;

  &:hover {
    opacity: 0.5;
  }

  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
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

export const ErrorPageLink = styled(Link)`
  border: 1px solid;
`
