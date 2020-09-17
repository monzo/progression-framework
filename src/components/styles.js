// @flow
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import PartialNavLink from './partialNavLink'

// Variables
export const PORTRAIT = 'max-aspect-ratio: 13/9'
export const LANDSCAPE = 'min-aspect-ratio: 13/9'
export const BREAKPOINT_MOBILE = 736
export const BREAKPOINT_TABLET = 1024
export const BREAKPOINT_DESKTOP = 1300
export const MIDNIGHT_SKY = '#14233c'
export const LAGOON_BLUE = '#145d8e'
export const GREY_BLUE = '#707b8c'

// Styles
// Error page

export const ErrorPageHeader = styled.h1`
  font-weight: 300;
  font-family: 'MaisonNeueMono', Consolas, monaco, monospace;
  font-size: 10rem;
  opacity: 0.4;
`
export const ErrorPageDescription = styled.h2`
  color: #888888;
`

export const ErrorPageLink = styled(Link)`
  border: 1px solid;
`

// Globals

export const Card = styled.div`
  position: relative;
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 0 2em 0.1em rgba(0, 0, 0, 0.1);
  padding: 1.3em;
`

export const Title = styled.h1`
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 600;
  color: ${MIDNIGHT_SKY};
  margin-top: 0;

  @media (min-width: ${BREAKPOINT_MOBILE}px) and (max-width: ${BREAKPOINT_TABLET}px) {
    font-size: 2.25em;
  }

  ${props =>
    props.small &&
    css`
      font-size: 2em;

      @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
        font-size: 1.6em;
      }
    `}
`

export const Subtitle = styled.h3`
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 600;
  color: ${GREY_BLUE};

  @media (min-width: ${BREAKPOINT_MOBILE}px) and (max-width: ${BREAKPOINT_TABLET}px) {
    font-size: 1.8em;
  }

  ${props =>
    props.small &&
    css`
      font-size: 1.6em;

      @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
        font-size: 1.4em;
      }
    `}
`

export const DefaultStyledLink = styled(Link)`
  cursor: pointer;
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  color: #dadada !important;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: inherit;
  padding: 0.5em 0 0.25em 0.5em;

  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
  &.active {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
  }
`

export const StyledLink = styled(PartialNavLink)`
  cursor: pointer;
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  color: #dadada !important;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: inherit;
  padding: 0.5em 0 0.25em 0.5em;

  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
  &.active {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
  }
`

// Layouts

export const PrimaryView = styled.div`
  height: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;

  ${props =>
    !props.noPadding &&
    css`
      padding: 3em 5em;

      @media (min-width: ${BREAKPOINT_MOBILE}px) and (max-width: ${BREAKPOINT_TABLET}px) {
        padding: 2em 2.5em;
      }

      @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
        padding: 5% 1em 2em 1em;
      }
    `}
`

export const ScrollbarHeader = styled.div`
  display: flex;
  margin-top: 3em;
  margin-bottom: 15px;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    margin-left: 10%;
    margin-bottom: 10px;
    margin-right: 10%;
  }
`

export const CenteredElement = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 70% !important;

    @media (${LANDSCAPE}) {
      margin-top: 4em;
    }
  }
`

export const Flexbox = styled.div`
  cursor: pointer;
  display: flex;
`

export const FlexboxPush = styled.div`
  margin: 0 0 0 auto;
  cursor: pointer;
`

export const Wrapper = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  height: 100% !important;
  
  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
`

export const Content = styled(Wrapper)`
  padding-top: 0 !important;
  background-color: white;
  height: auto;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    .container {
      padding-left: 20px;
    }
  }
`

export const Contain = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0 !important;
`

// Levels

export const LevelsSubtitle = styled(Subtitle)`
  float: right;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    float: left;
    padding-right: 1em;
  }
`

export const LevelsContainer = styled.div`
  width: 13em;
  margin-top: 0;
  align-items: center;

  @media all and (max-width: ${BREAKPOINT_DESKTOP}px) {
    width: 11.5em;
  }

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    display: flex;
    width: 100%;
    margin-top: 1em;
    text-align: center;
    align-items: center;
  }
`

export const LevelsTextWrapper = styled.div`
  display: inline-flex;
  margin-left: 0;
  margin-top: 0;
  width: 100%;
  justify-content: space-between;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
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

// Toolbar

export const Toolbar = styled.div`
  display: none;
  width: 0;
  visibility: hidden;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    padding: 1.5rem 1.2rem 1.5rem;
    display: flex;
    visibility: inherit;
    height: 4.5em;
    width: 100%;
    background: rgb(23, 0, 46);
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  }
`

export const ToolbarPushWrapper = styled(FlexboxPush)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ToolbarIcon = styled.img`
  width: auto;
  height: auto;
  filter: invert(1);

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    max-height: 26.25px;
  }
`

export const MenuIcon = styled.img`
  width: auto;
  height: auto;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    display: inherit;
    margin-top: 0;
  }
`

// Sidebar

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: rgb(23, 0, 46);
  color: black;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  width: 250px;
  h4 {
    padding-top: 0;
    font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
    font-size: 1.3em;
  }

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 100% !important;
    height: 100%;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    transform: none;
  }
`

export const ListElement = styled.li`
  display: flex;
  margin-top: 4px;
`

export const EmojiListItem = styled.span`
  padding-right: 10px;
`

export const SidebarList = styled.ul`
  flex: 1 0 auto;
  flex-direction: column;
  margin-top: 0.5em;
  padding-left: 0;
  list-style-type: none;

  ${props =>
    props.main &&
    css`
      width: 70%;
      margin-top: 2em;
      margin-bottom: 3em;
      @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
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

export const SidebarReset = styled.div`
  position: static;
  width: 100%;
  height: 100%;
  display: block;
`

export const SidebarScroll = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    display: block;
  }
`

export const SidebarIcon = styled.img`
  width: auto;
  height: auto;
  max-height: 45px;
  min-width: 39px;
  filter: invert(1);

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    max-height: 39px;
    min-width: 39px;
  }
`

export const CloseIcon = styled.img`
  display: none;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    display: inherit;
    height: 23px;
    margin-top: 8px;
  }
`

export const Homepage = styled.div`
  padding: 2em 3em;
`

// Description view

export const DescriptionView = styled(PrimaryView)`
  padding-top: 10%;

  @media (min-width: ${BREAKPOINT_MOBILE}px) and (max-width: ${BREAKPOINT_TABLET}px) {
    padding-top: 4em;
    padding-left: 3em;
  }
  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    padding-top: 5%;
  }
`

export const DescriptionTitleGroup = styled.div`
  position: relative;
  z-index: 1;
`

export const Description = styled.div`
  position: relative;
  color: #34495e;
  width: 65%;
  z-index: 1;

  @media all and (max-width: ${BREAKPOINT_DESKTOP}px) {
    width: 100%;
  }
  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    margin-bottom: 3em;
    width: 95%;
  }
`

export const DescriptionText = styled.p`
  margin-top: 24px;
  line-height: 1.3em;
  font-weight: 500;
  font-size: 1.5em;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    font-size: 1.2em;
    font-weight: 500;
  }
`

// Levelled framework view

export const ExamplesText = styled.p`
  color: ${LAGOON_BLUE};
  font-weight: 600;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    color: ${LAGOON_BLUE};
  }
`

export const FrameworkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 3em 1em 3em;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    display: block;
  }
`

export const FrameworkTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

export const FrameworkCard = styled(Card)`
  position: relative;
  margin-top: 0;
  margin-bottom: 1em;

  ${props =>
    props.minimal &&
    css`
      width: 500px;
      flex-shrink: 0;
      margin-bottom: 0;
    `}
`

export const TopicRow = styled.div`
  display: flex;
  padding: 2em 3em;
  margin-top: 0;
  width: 100%;

  & > * {
    margin-left: 32px;
  }

  &:nth-child(even) {
    background: #efefef;
  }
`

export const TopicRows = styled.div`
  overflow: auto;
  display: flex;
  margin-top: 0;

  @media all and (max-width: ${BREAKPOINT_MOBILE}px) {
    flex-shrink: 0;
  }
`

export const TopicRowHeader = styled(Card)`
  align-self: center;
  margin-left: -20px;
  width: 200px;
  flex-shrink: 0;
  text-align: center;
  padding-top: 55px;
`

export const CardContentList = styled.ul`
  margin-top: 1em;
  padding-left: 1em;
  width: 95%;
`

export const CardTitle = styled.p`
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 600;
  color: ${MIDNIGHT_SKY};
  margin-top: 0;
  font-size: 1.4rem;
`

export const CardCategory = styled.div`
  text-transform: uppercase;
  width: 100%;
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 600;

  ${props =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
`

export const NoSkills = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin: 2em auto;
  max-width: 350px;
  text-align: center;
  opacity: 0.5;
`

export const CardLevel = styled.div`
  font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  opacity: 0.5;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`

export const CardTitleGroup = styled.div`
  margin-top: 0.2em;

  ${CardCategory} + & {
    margin-top: 32px;
  }
`

// Text framework view

export const MarkdownContent = styled.div`
  * {
    font-family: 'MaisonNeue', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif !important;
  }
  h2 {
    margin-top: 0.2em;
  }
  ul {
    padding-left: 1em;
  }
  & h2:nth-child(1) {
    margin-top: 0;
    padding-top: 0;
  }
`
