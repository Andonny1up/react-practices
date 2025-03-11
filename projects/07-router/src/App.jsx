import './App.css'
import { Router } from './Router'
import HomePage from './pages/home'
import AboutPage from './pages/About'


const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

function App() {
  
  return (
    <main>
      <Router routes={routes}></Router>
    </main>
  )
}

export default App
