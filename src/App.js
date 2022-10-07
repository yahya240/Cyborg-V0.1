import {Container} from './components/index'
import {Header,Footer} from './sections/index'
import { Home, Profile,Browse } from './pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/Browse' element={<Browse />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
