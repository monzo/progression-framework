// @flow
import * as React from 'react'
import { Helmet } from 'react-helmet'
import SidebarBuilder from '../components/redesignedSidebarBuilder'
import {
  Contain,
  Content,
  Sidebar,
  SidebarIcon,
  SidebarList,
  SidebarReset,
  SidebarScroll,
  ScrollbarHeader,
  FlexboxPush,
  CloseIcon,
} from './redesign'
import favicon from '../images/favicon.png'
import closeIcon from '../images/close_icon.svg'

type Props = {
  data: Object,
  children?: React.Node,
}

type State = {
  isSidebarVisible: boolean,
}

const SidebarRenderer = ({
  sidebarClickHandler,
  isSidebarVisible,
  data,
}: Object) => (
  <Sidebar className={isSidebarVisible ? 'open' : null}>
    <SidebarReset>
      <SidebarScroll>
        <ScrollbarHeader>
          <SidebarIcon src={favicon} alt="Monzo" />
          <FlexboxPush>
            <CloseIcon onClick={sidebarClickHandler} src={closeIcon} />
          </FlexboxPush>
        </ScrollbarHeader>
        <SidebarList main>
          <SidebarBuilder data={data} />
        </SidebarList>
      </SidebarScroll>
    </SidebarReset>
  </Sidebar>
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
      isSidebarVisible: window.innerWidth < 736,
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
        <Content>
          {/*{isSidebarVisible then show toolbar}*/}
          {children}
        </Content>
      </Contain>
    )
  }
}

export default Layout
