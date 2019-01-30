// @flow
import React from 'react'
import {
  Container,
  SidebarToggle,
  Text,
  ToolbarPush,
  ToolbarWrapper,
  Content,
  Sidebar,
} from './safariStyles'

type State = {
  isSidebarVisible: boolean,
}

class View extends React.Component<null, State> {
  state = { isSidebarVisible: false }

  toggleSidebar = (event: SyntheticUIEvent<>) => {
    event != null ? event.preventDefault() : null
    this.setState({
      isSidebarVisible: !this.state.isSidebarVisible,
    })
  }

  render() {
    return (
      <Container>
        <Sidebar visible={this.state.isSidebarVisible}>
          <Lipsum toggleSidebar={this.toggleSidebar} />
        </Sidebar>
        <Content>
          <Toolbar toggleSidebar={this.toggleSidebar} />
          <Lipsum />
        </Content>
      </Container>
    )
  }
}

export default View

// Components
const Toolbar = ({ toggleSidebar }: *) => (
  <ToolbarWrapper>
    <button onClick={toggleSidebar}>Click</button>
    <ToolbarPush>
      <span>Logo</span>
    </ToolbarPush>
  </ToolbarWrapper>
)

export const Lipsum = (props: ?Object) => (
  <React.Fragment>
    {props && props.toggleSidebar != null ? (
      <SidebarToggle onClick={props.toggleSidebar}>Click</SidebarToggle>
    ) : null}
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit ex id
      risus maximus blandit. Ut vulputate eros sit amet blandit interdum.
      Integer fringilla lectus quis dui ornare interdum. Fusce luctus pulvinar
      mauris ut vehicula. Etiam nibh ligula, porttitor ac commodo at, ultricies
      eget nisl. Nam porttitor, ipsum nec porta varius, elit nisi pharetra
      metus, ut sodales est est sed mauris. Phasellus auctor ipsum ac
      pellentesque scelerisque. Morbi efficitur velit nec diam auctor, a
      pharetra nisi consectetur. Curabitur metus turpis, accumsan at fermentum
      vel, interdum id sem. Aliquam placerat, nisi vitae rutrum ultrices, ante
      ante dictum lorem, nec bibendum ex elit sed massa. Praesent vitae
      hendrerit orci. Proin nisl turpis, feugiat ut faucibus suscipit, mattis
      sit amet justo. Curabitur elementum orci neque, eget congue nulla faucibus
      viverra.
    </Text>
    <Text>
      In hac habitasse platea dictumst. Aenean nec porttitor lectus. Fusce
      bibendum suscipit maximus. Etiam accumsan lectus massa, nec lobortis orci
      elementum a. Nullam tincidunt eu diam ac tincidunt. Mauris et laoreet leo,
      et faucibus eros. Fusce mollis dolor diam, vitae laoreet lacus efficitur
      in. Nulla id nibh velit. Nulla auctor at odio vitae hendrerit. Sed in
      neque malesuada, facilisis dui eget, placerat dolor.
    </Text>
    <Text>
      Morbi at vehicula mauris, vitae aliquam odio. Donec id felis lectus. Sed
      eu finibus neque. Curabitur auctor dui id libero elementum porta. Etiam
      non libero ligula. Pellentesque habitant morbi tristique senectus et netus
      et malesuada fames ac turpis egestas. Duis consectetur turpis et tortor
      ultrices mattis. Nulla tempor venenatis tincidunt. Proin et ante quis
      lacus mollis cursus.
    </Text>
    <Text>
      Ut sit amet ante quis ante semper malesuada. Sed elit neque, pulvinar quis
      nunc at, sodales hendrerit magna. Pellentesque porttitor at lorem in
      venenatis. Quisque at massa sed nulla tincidunt hendrerit. Phasellus
      suscipit odio a ligula hendrerit interdum. Cras lobortis mattis eros a
      rutrum. Suspendisse accumsan tempus quam, nec mattis libero convallis eu.
      Aliquam placerat faucibus ante non volutpat. Donec tristique nibh nunc, in
      consequat urna varius ac. Etiam quis metus tellus. Proin consectetur lacus
      quis dictum venenatis.
    </Text>
    <Text>
      Mauris ac mi nec metus porttitor faucibus. Integer ornare faucibus quam
      sit amet semper. Vestibulum molestie dui felis, eget placerat ipsum
      faucibus at. In lacinia cursus dolor sed maximus. Vivamus a dignissim
      turpis. Aliquam tempus nisi nec nulla laoreet vehicula. Vivamus facilisis
      nisi augue, vitae vestibulum turpis tristique in. Curabitur vulputate arcu
      ut est bibendum mattis ut non augue. Mauris non interdum elit, elementum
      imperdiet odio. Maecenas tristique auctor fermentum. Sed viverra finibus
      mauris sit amet aliquet. Pellentesque fringilla auctor eros sit amet
      cursus. Pellentesque tristique suscipit sapien. Suspendisse tristique
      metus pellentesque, dignissim lectus sit amet, volutpat lorem.
    </Text>
    <Text>
      Ut vitae blandit nunc. Donec vitae dolor sit amet justo venenatis porta.
      Fusce sed enim a tortor luctus pulvinar quis sed libero. Vivamus finibus
      commodo porttitor. Donec tincidunt non odio non pulvinar. Cras ornare
      purus nec ligula blandit pharetra. Proin et felis nisl. Mauris lectus
      lacus, porta eget commodo a, commodo non libero. Quisque sed orci at quam
      dictum hendrerit. Sed nec ex metus. Pellentesque ullamcorper tellus sed
      varius luctus.
    </Text>
    <Text>
      Nam consectetur urna dolor, vel aliquet ligula semper quis. Cras pharetra
      hendrerit pretium. Integer erat ex, malesuada mollis egestas vitae,
      scelerisque nec tellus. Sed rutrum libero quis congue pellentesque. In hac
      habitasse platea dictumst. Sed porttitor dui sem, ut ullamcorper justo
      congue at. In hac habitasse platea dictumst.
    </Text>
    <Text>
      Maecenas tincidunt gravida cursus. Phasellus viverra lacus nec ante
      egestas accumsan. Praesent bibendum lorem eu mauris facilisis ultricies.
      Phasellus mauris ex, porta vitae enim nec, porttitor varius metus.
      Vestibulum nisi mi, semper vel vulputate quis, pretium non libero. Morbi
      bibendum nulla vitae placerat rhoncus. Ut bibendum, ligula ut vehicula
      rutrum, sapien nisl fringilla ex, eu volutpat est nisl a eros. Aenean
      rhoncus mauris aliquet placerat tristique. Aliquam porttitor eget purus
      scelerisque eleifend. Nullam sed orci ac felis iaculis sollicitudin. Nam
      in justo eu purus sodales efficitur. Morbi vulputate velit auctor orci
      molestie, non tempus urna ultricies. Mauris at pellentesque diam.
      Pellentesque vestibulum ultricies dictum. Donec fringilla elit vel mattis
      sagittis.
    </Text>
    <Text>
      In molestie arcu justo. Donec tempor nunc hendrerit placerat dapibus. In
      laoreet turpis eu quam mollis dignissim. Maecenas fringilla posuere enim,
      id fringilla ante convallis non. Nulla maximus quam eget ipsum accumsan
      ultrices. Fusce vitae risus porta, suscipit sem in, volutpat mauris.
      Vestibulum commodo turpis sed rutrum dignissim. Suspendisse at vehicula
      ex, eu sollicitudin arcu.
    </Text>
    <Text>
      Praesent non cursus neque, id lacinia est. Integer ornare risus a dui
      ullamcorper, posuere volutpat nisi efficitur. Ut sollicitudin diam nibh,
      eget imperdiet diam sodales at. Donec imperdiet facilisis consequat. Ut eu
      dui nec felis ultrices ultricies at vel augue. Morbi risus nulla, congue
      nec mauris sed, lacinia malesuada ante. Proin egestas nisi fringilla,
      pretium quam et, consequat justo.
    </Text>
    <Text>
      Mauris ac mi nec metus porttitor faucibus. Integer ornare faucibus quam
      sit amet semper. Vestibulum molestie dui felis, eget placerat ipsum
      faucibus at. In lacinia cursus dolor sed maximus. Vivamus a dignissim
      turpis. Aliquam tempus nisi nec nulla laoreet vehicula. Vivamus facilisis
      nisi augue, vitae vestibulum turpis tristique in. Curabitur vulputate arcu
      ut est bibendum mattis ut non augue. Mauris non interdum elit, elementum
      imperdiet odio. Maecenas tristique auctor fermentum. Sed viverra finibus
      mauris sit amet aliquet. Pellentesque fringilla auctor eros sit amet
      cursus. Pellentesque tristique suscipit sapien. Suspendisse tristique
      metus pellentesque, dignissim lectus sit amet, volutpat lorem.
    </Text>
    <Text>
      Ut vitae blandit nunc. Donec vitae dolor sit amet justo venenatis porta.
      Fusce sed enim a tortor luctus pulvinar quis sed libero. Vivamus finibus
      commodo porttitor. Donec tincidunt non odio non pulvinar. Cras ornare
      purus nec ligula blandit pharetra. Proin et felis nisl. Mauris lectus
      lacus, porta eget commodo a, commodo non libero. Quisque sed orci at quam
      dictum hendrerit. Sed nec ex metus. Pellentesque ullamcorper tellus sed
      varius luctus.
    </Text>
    <Text>
      Nam consectetur urna dolor, vel aliquet ligula semper quis. Cras pharetra
      hendrerit pretium. Integer erat ex, malesuada mollis egestas vitae,
      scelerisque nec tellus. Sed rutrum libero quis congue pellentesque. In hac
      habitasse platea dictumst. Sed porttitor dui sem, ut ullamcorper justo
      congue at. In hac habitasse platea dictumst.
    </Text>
    <Text>
      Maecenas tincidunt gravida cursus. Phasellus viverra lacus nec ante
      egestas accumsan. Praesent bibendum lorem eu mauris facilisis ultricies.
      Phasellus mauris ex, porta vitae enim nec, porttitor varius metus.
      Vestibulum nisi mi, semper vel vulputate quis, pretium non libero. Morbi
      bibendum nulla vitae placerat rhoncus. Ut bibendum, ligula ut vehicula
      rutrum, sapien nisl fringilla ex, eu volutpat est nisl a eros. Aenean
      rhoncus mauris aliquet placerat tristique. Aliquam porttitor eget purus
      scelerisque eleifend. Nullam sed orci ac felis iaculis sollicitudin. Nam
      in justo eu purus sodales efficitur. Morbi vulputate velit auctor orci
      molestie, non tempus urna ultricies. Mauris at pellentesque diam.
      Pellentesque vestibulum ultricies dictum. Donec fringilla elit vel mattis
      sagittis.
    </Text>
    <Text>
      In molestie arcu justo. Donec tempor nunc hendrerit placerat dapibus. In
      laoreet turpis eu quam mollis dignissim. Maecenas fringilla posuere enim,
      id fringilla ante convallis non. Nulla maximus quam eget ipsum accumsan
      ultrices. Fusce vitae risus porta, suscipit sem in, volutpat mauris.
      Vestibulum commodo turpis sed rutrum dignissim. Suspendisse at vehicula
      ex, eu sollicitudin arcu.
    </Text>
    <Text>
      Praesent non cursus neque, id lacinia est. Integer ornare risus a dui
      ullamcorper, posuere volutpat nisi efficitur. Ut sollicitudin diam nibh,
      eget imperdiet diam sodales at. Donec imperdiet facilisis consequat. Ut eu
      dui nec felis ultrices ultricies at vel augue. Morbi risus nulla, congue
      nec mauris sed, lacinia malesuada ante. Proin egestas nisi fringilla,
      pretium quam et, consequat justo.
    </Text>
  </React.Fragment>
)
