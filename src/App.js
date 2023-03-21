import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
