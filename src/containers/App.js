import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import HomePage from '../components/homepage';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/signup';
import NavBar from '../components/navbar';
import Information from '../components/information';
import CreateActivity from '../components/createActivity';
import Activities from './Activities';
import CreateMeasurement from '../components/CreateMeasurement';
import Measurements from './Measurements';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/Auth/signup" component={Signup} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/create-activity" component={CreateActivity} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/activity/:id/measurements" component={Measurements} />
          <Route exact path="/activity/:id/create-measurements" component={CreateMeasurement} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
