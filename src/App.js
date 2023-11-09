import './App.css'
import Page1 from './components/RepoData'
import Page2 from './components/page2'
import {Switch, Route} from 'react-router-dom'

const App = () => (
  <Switch>
    <Route exact path="/" component={Page1} />
    <Route exact path="/page-2" component={Page2} />
    <Route exact path="/page-2" component={Page2} />
  </Switch>
)

export default App
