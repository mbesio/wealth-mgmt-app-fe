import React from 'react'
import ReactDOM from 'react-dom/client'
import AccountAssetsForm from './components/accountsAssets/AccountsAssetsForm'

const App = () => (
  <div>
    <AccountAssetsForm />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
