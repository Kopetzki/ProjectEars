import logo from './logo.svg';
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import BookScreen from './screens/BookScreen'
import BookPopUp from './screens/BookPopUp'
import LibraryScreen from './screens/LibraryScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'


function App() {
  return (
    <Router>
      <Header/>
      <main className = "py-5">
        <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component= {RegisterScreen}/>
            <Route path='/profile' component= {ProfileScreen}/>
            <Route path='/books/' component={BookScreen} />
            <Route path='/book/:id' component={BookPopUp} />
            <Route path='/library/:id?'component={LibraryScreen}/>

        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
