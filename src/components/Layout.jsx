import { Outlet } from 'react-router'

import Header from './Header'
import Footer from './Footer'

import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  /* gap: 12px; */
`

const Main = styled.main`
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
