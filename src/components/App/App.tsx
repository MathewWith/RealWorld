import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from '../Header';
import Home from 'src/components/Pages/Home';
import './App.scss';
import SignIn from 'src/components/Pages/Auth/SignIn/SignIn';
import SignUp from 'src/components/Pages/Auth/SignUp/SignUp';
import setRequestInterceptor from 'src/shared/interceptor/interceptor';

function App() {
  setRequestInterceptor()
  return (
    <div className="App">
       <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
