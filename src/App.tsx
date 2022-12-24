import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './components/landingPage/landing'
import AssetsView from './components/accountsAssets/AssetsView'
import AssetsForm from './components/accountsAssets/AssetsForm'

const App = () => (
  <div>
    <LandingPage />
    <AssetsForm />
    <AssetsView />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
