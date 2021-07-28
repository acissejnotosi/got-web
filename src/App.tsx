
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GOTMap from './components/got-map'

function App () {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={GOTMap} />
          <Route exact path='/:houseid' component={GOTMap} />
        </Switch>
      </Router>
  )
}

export default App
