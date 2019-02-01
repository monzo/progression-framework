// @flow
import * as React from 'react'
import { Location } from '@reach/router'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.png'
import menuIcon from '../images/menu_icon.svg'
import closeIcon from '../images/close_icon.svg'
import SidebarBuilder from './sidebarBuilder'
import {
  Contain,
  Wrapper,
  Content,
  Sidebar,
  SidebarIcon,
  SidebarList,
  SidebarReset,
  SidebarScroll,
  ScrollbarHeader,
  FlexboxPush,
  CloseIcon,
  Toolbar,
  ToolbarIcon,
  ToolbarPushWrapper,
  MenuIcon,
} from './styles'

type Props = {
  data: Object,
  children?: React.Node,
}

type State = {
  isSidebarVisible: boolean,
}

const ToolbarRenderer = ({ sidebarClickHandler, isSidebarVisible }: Object) => (
  <React.Fragment>
    {isSidebarVisible ? null : (
      <Toolbar className={isSidebarVisible ? 'visible' : null}>
        <MenuIcon onClick={sidebarClickHandler} src={menuIcon} />
        <ToolbarPushWrapper>
          <ToolbarIcon src={favicon} alt="Monzo" />
        </ToolbarPushWrapper>
      </Toolbar>
    )}
  </React.Fragment>
)

const SidebarRenderer = ({
  sidebarClickHandler,
  isSidebarVisible,
  data,
}: Object) => (
  <React.Fragment>
    {isSidebarVisible ? (
      <Location>
        {({ location }) => (
          <Sidebar>
            <SidebarReset>
              <SidebarScroll>
                <ScrollbarHeader>
                  <SidebarIcon src={favicon} alt="Monzo" />
                  <FlexboxPush>
                    <CloseIcon onClick={sidebarClickHandler} src={closeIcon} />
                  </FlexboxPush>
                </ScrollbarHeader>
                <SidebarList main>
                  <SidebarBuilder data={data} location={location} />
                </SidebarList>
              </SidebarScroll>
            </SidebarReset>
          </Sidebar>
        )}
      </Location>
    ) : null}
  </React.Fragment>
)

class Layout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isSidebarVisible: false,
    }
  }

  componentDidMount() {
    this.updateSidebarOnResize()
    window.addEventListener('resize', this.updateSidebarOnResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSidebarOnResize)
  }

  updateSidebarOnResize = () => {
    this.setState({
      isSidebarVisible: window.innerWidth > 736,
    })
  }

  sidebarClickHandler = (event: SyntheticUIEvent<>) => {
    event != null ? event.preventDefault() : null
    this.setState({
      isSidebarVisible: !this.state.isSidebarVisible,
    })
  }

  render() {
    let { children, data } = this.props
    let { isSidebarVisible } = this.state

    return (
      <Contain>
        <Helmet>
          <title>Progression at Monzo</title>
        </Helmet>
        <SidebarRenderer
          data={data}
          sidebarClickHandler={this.sidebarClickHandler}
          isSidebarVisible={isSidebarVisible}
        />
        <Wrapper>
          <ToolbarRenderer
            sidebarClickHandler={this.sidebarClickHandler}
            isSidebarVisible={isSidebarVisible}
          />
          <Content>{children}</Content>
        </Wrapper>
      </Contain>
    )
  }
}

export default Layout
