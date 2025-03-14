import { lazy, Suspense } from 'react'

import './App.css'
import { Router } from './Router'
import HomePage from './pages/home'
import SearchPage from './pages/Search'
import Page404 from './pages/404'

import Route from './Route'

const LazyAboutPage = lazy(() => import('./pages/About')) // import dinamico

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  
  return (
    <main>
      <Suspense>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={LazyAboutPage}/>
      </Router>
      </Suspense>
    </main>
  )
}

export default App
