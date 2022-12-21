import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div>
    hello from the APP
  </div>
)

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)