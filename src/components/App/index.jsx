import { BrowserRouter } from 'react-router'
import Global from '../../assets/styles/global'

import PageRoutes from '../../PageRoutes'

function App() {

  return (
    <BrowserRouter>
      <Global />
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
