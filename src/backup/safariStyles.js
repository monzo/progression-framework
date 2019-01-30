// @flow
import styled, { css } from 'styled-components'

export const ToolbarWrapper = styled.div`
  display: none;
  margin-top: 0;

  @media all and (max-width: 736px) {
    position: relative;
    grid-area: full;
    display: flex;
    height: 5em;
    background-color: lightcoral;
  }
`

export const ToolbarPush = styled.div`
  margin: 0 0 0 auto;
  cursor: pointer;
`

export const Container = styled.div`
  position: fixed;
  //padding-left: env(safe-area-inset-left);
  //padding-right: env(safe-area-inset-right);
  //padding-bottom: env(safe-area-inset-bottom);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas:
    'sidebar  content'
    'full  full';
  //position: relative;
  height: 100%;
  width: 100%;
  background: yellow;
  //overflow-x: hidden;
`

export const Sidebar = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  grid-area: sidebar;
  margin-top: 0;
  background-color: #20bf6b;

  @media all and (max-width: 736px) {
    display: none;
  }

  ${props =>
    props.visible === true &&
    css`
      @media all and (max-width: 736px) {
        position: relative;
        display: block !important;
        height: 100vh !important;
        width: 100vw !important;
      }
    `}
`

export const Content = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  grid-area: content;
  margin-top: 0;
  background-color: #fd9644;

  @media all and (max-width: 736px) {
    grid-area: full;
  }
`

export const Text = styled.p`
  margin-top: 0;
`

export const SidebarToggle = styled.button`
  display: none;
  @media all and (max-width: 736px) {
    display: inherit;
  }
`
