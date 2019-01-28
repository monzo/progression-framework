// @flow
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import SidebarBuilder from '../components/redesignedSidebarBuilder'
import {
  ButtonContainer,
  Contain,
  Content,
  PaddedFaIcon,
  Sidebar,
  SidebarButton,
  SidebarIcon,
  SidebarList,
} from './redesign'
import favicon from '../images/favicon.png'

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
    <SidebarIcon src={favicon} alt="Monzo" />
    <SidebarList main>
      <SidebarBuilder data={data} />
    </SidebarList>
    <ButtonContainer>
      <SidebarButton className="o-button-neutral" onClick={sidebarClickHandler}>
        <PaddedFaIcon icon={faTimes} />
        Close menu
      </SidebarButton>
    </ButtonContainer>
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
          {/*{isSidebarVisible}*/}
          {children}
        </Content>
      </Contain>
    )
  }
}

export default Layout
