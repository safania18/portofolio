import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import routes from './routes/web'

import { Suspense } from 'react'
import Loading from './components/common/Loading'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<Loading />}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
