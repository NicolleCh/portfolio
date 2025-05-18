import Global from '../../assets/styles/global'
import Header from '../Header'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'
import Footer from '../Footer'
import Arrow from '../Arrow/Arrow'

import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../assets/themes/theme'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Arrow />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
