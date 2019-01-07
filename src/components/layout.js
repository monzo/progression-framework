// @flow
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import SidebarBuilder from '../components/sidebarBuilder'
import favicon from '../images/favicon.png'
import text from '../images/logo/white-text.png'
import {
  Contain,
  Content,
  Main,
  Toolbar,
  Align,
  ToolbarLogo,
  ToolbarText,
  ButtonContainer,
  Sidebar,
  SidebarButton,
  PaddedFaIcon,
  MobileNavBtn,
  PaddedLink,
} from './styles'

type Props = {
  data: Object,
  children?: React.Node,
}

type State = {
  isSidebarVisible: boolean,
}

const ToolbarRenderer = ({ sidebarClickHandler, isSidebarVisible }: Object) => (
  <Toolbar>
    <Align>
      <MobileNavBtn onClick={sidebarClickHandler}>
        <FontAwesomeIcon icon={isSidebarVisible ? faTimes : faBars} />
      </MobileNavBtn>
      <Link to="/frameworks">
        <ToolbarText src={text} alt="Progression at Monzo" />
      </Link>
    </Align>
    <ToolbarLogo>
      <PaddedLink href="https://www.github.com/monzo/progression-framework">
        <FontAwesomeIcon size="3x" icon={faGithub} className="toolbar-fa" />
      </PaddedLink>
      <a href="https://www.monzo.com">
        <img src={favicon} alt="Favicon" />
      </a>
    </ToolbarLogo>
  </Toolbar>
)

const SidebarRenderer = ({
  sidebarClickHandler,
  isSidebarVisible,
  data,
}: Object) => (
  <Sidebar className={isSidebarVisible ? 'open' : null}>
    <h2>Frameworks</h2>
    <ul>
      <SidebarBuilder data={data} toggleSidebar={sidebarClickHandler} />
    </ul>
    <ButtonContainer>
      <SidebarButton className="o-button-neutral" onClick={sidebarClickHandler}>
        <PaddedFaIcon icon={faTimes} />
        Close menu
      </SidebarButton>
    </ButtonContainer>
  </Sidebar>
)

class Layout extends React.Component<Props, State> {
  state = { isSidebarVisible: false }

  sidebarClickHandler = (event: SyntheticUIEvent<>) => {
    event != null ? event.preventDefault() : null
    this.setState({
      isSidebarVisible: !this.state.isSidebarVisible,
    })
  }

  render() {
    let { children, data } = this.props

    return (
      <React.Fragment>
        <Helmet>
          <title>Progression at Monzo</title>
        </Helmet>
        <Contain>
          <SidebarRenderer
            data={data}
            sidebarClickHandler={this.sidebarClickHandler}
            isSidebarVisible={this.state.isSidebarVisible}
          />
          <Content>
            <ToolbarRenderer
              sidebarClickHandler={this.sidebarClickHandler}
              isSidebarVisible={this.state.isSidebarVisible}
            />
            <Main>{children}</Main>
          </Content>
        </Contain>
      </React.Fragment>
    )
  }
}

export default Layout
