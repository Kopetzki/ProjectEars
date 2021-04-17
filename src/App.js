import logo from './logo.svg';
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import HomeScreen from './screens/HomeScreen'
import BookScreen from './screens/BookScreen'
import BookPopUp from './screens/BookPopUp'
import AudioScreen from './screens/AudioScreen'
import axios from 'axios';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import LibraryScreen from './screens/LibraryScreen';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
  return (
    <Router>
      <Header/>
      <main className = "py-5">
        <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/books/' component={BookScreen} />
            <Route path='/book/:id' component={BookPopUp} />
            <Route path='/audio/'component={AudioScreen}/>
            <Route path='/login/'component={LoginScreen}/>
            <Route path='/register/'component={RegisterScreen}/>
            <Route path='/profile/'component={ProfileScreen}/>
            <Route path='/library/'component={LibraryScreen}/>

        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
