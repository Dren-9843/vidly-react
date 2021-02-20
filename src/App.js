import React, { Component } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'
import ReactTooltip from 'react-tooltip'
import Movies from './components/movies';
import Customers from './components/customers';
import Logout from './components/logOut';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Profile from './components/profile';
import NavBar from './components/navBar';
import Register from './components/registerForm';
import LoginForm from "./components/loginForm";
import ProtectedRoute from './components/common/protectedRoute';
import { getCurrentUser } from './services/authService';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import MovieForm from './components/movieForm';


class App extends Component {
  state = {};

  componentDidMount() {     
      const user = getCurrentUser()
      this.setState({ user })
  }
  render() { 
    return (
      <React.Fragment>
        <ToastContainer/>
        <ReactTooltip />
    <NavBar user={this.state.user}/>
    <main className="container">
    <Switch>
      <ProtectedRoute path="/movies/:id" component={MovieForm}/>
      <Route path="/movies" render={props => <Movies {...props} user={this.state.user} />} />
      <Route path="/customers" component={Customers}/>
      <Route path="/rentals" component={Rentals}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/register" component={Register}/>
      <Route path="/not-found" component={NotFound}/>
      <Redirect from="/" exact to="/movies"/>
      <Redirect to="/not-found"/>
      </Switch>
    </main>
    </React.Fragment>
      );
  }
}
 
export default App;

