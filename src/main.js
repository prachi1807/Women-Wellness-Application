import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Homepage.jsx';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ContactUs from './components/Health/Health';
import Chatbot from './components/Chatbot/Chatbot';
import DiseaesPred from './components/DiseasePred/DiseaseDetection';
import Doctor from "./components/doctor/Doctor"
import Details from "./components/doctor/Details"
import Details1 from './components/doctor/Details1';
import Details2 from './components/doctor/Details2';
import UserProfile from './components/UserProfile/userprofile';
import fire from "./fire"

function App() {

    const handleLogout = () => {
        fire.auth().signOut();
      }

  return (
    <Router>
      <Chatbot />
      <Navbar handleLogout={handleLogout} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/diseasepred' component={DiseaesPred} />
        <Route path='/doctor' component={Doctor} />
        <Route path='/details' component={Details} />
        <Route path='/details1' component={Details1} />
        <Route path='/details2' component={Details2} />
        <Route path='/health' component={ContactUs} />
        <Route path='/userprofile' component={UserProfile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
