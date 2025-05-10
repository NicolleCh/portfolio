import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import LayoutError from './components/LayoutError'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Route>

      <Route element={<LayoutError />}>
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
