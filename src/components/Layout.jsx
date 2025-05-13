import { Outlet } from 'react-router'

import Header from './Header'
import Footer from './Footer'

import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* overflow: hidden; */
`

const Main = styled.main`
  display: flex;
  align-items: center;
  flex: 1;
  overflow-y: auto;
`

export default function Layout() {
  return (
    <PageWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </PageWrapper>
  )
}
