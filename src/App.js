import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AboutUs from './components/AboutUs/AboutUs';
import Appointment from './components/Appointment/Appointment';
import OurTeam from './components/OurTeam/OurTeam';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blog/Blogs/Blogs';
import ReadBlog from './components/Blog/ReadBlog/ReadBlog';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <div className="App">

      <AuthProvider>

        <Router>
          <ScrollToTop>
            <Header></Header>

            <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <Route path="/about">
                <AboutUs></AboutUs>
              </Route>

              <PrivateRoute path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>

              <Route path="/our-team">
                <OurTeam></OurTeam>
              </Route>

              <Route path="/blog">
                <Blogs></Blogs>
              </Route>

              <Route path="/readBlog/:blogId">
                <ReadBlog></ReadBlog>
              </Route>

              <PrivateRoute path="/serviceDetails/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>

            </Switch>

            <Footer></Footer>

          </ScrollToTop>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
