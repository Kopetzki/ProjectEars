import logo from './logo.svg';
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import HomeScreen from './screens/HomeScreen'
import BookScreen from './screens/BookScreen'
import BookPopUp from './screens/BookPopUp'
import AudioScreen from './screens/AudioScreen'

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
            <Route path='/login/'component={Login}/>
            <Route path='/signup/'component={Signup}/>

        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
