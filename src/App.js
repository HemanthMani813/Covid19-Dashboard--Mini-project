
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './components/Home'
import About from './components/About'
import StateSpecificDetails from './components/StateSpecificDetails'
import Vaccination from './components/Vaccination'
import NotFound from './components/NotFound'

import './App.css'
import HemanthFooter from './components/HemanthFooter';

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/state/:stateCode" component={StateSpecificDetails} />
        <Route exact path="/about" component={About} />
        <Route exact path="/vaccination" component={Vaccination} />
        <Route component={NotFound} />
        
      </Switch>
      <HemanthFooter/>
    </Router>
  
)
export default App