import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Switch>
          <Route path="/pay">
              < Pay />              
          </Route>

          <Route path="/pay">
              < Success />              
          </Route>


        </Switch>
      </Router>      
    </>
  )

}

export default App
