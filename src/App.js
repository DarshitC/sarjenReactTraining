import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CounterApp from './CounterApp';
import FavColorApp from './FavColorApp';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import EditProfile from './EditProfile';
import ShowForgottenPwd from './ShowForgottenPwd';
import HooksCalculatorComponent from './HooksCalculatorComponent';
import TodoList from './TODO';
import CRUDWithLocalStorage from './CRUDWithLocalStorage';
import ChangePwd from './ChangePwd';

function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li><Link to="/counter">Counter App</Link></li>
            <li><Link to="/favcolor">Favorite Color App</Link></li>
            <li><Link to="/signupform">Signup Form</Link></li>
            <li><Link to="/loginform">Login Form</Link></li>
            <li><Link to="/changepwd">Change Password</Link></li>
            <li><Link to="/editprofile">Edit Profile</Link></li>
            <li><Link to="/showsfrgottenpwd">Show Forgotten Password</Link></li>
            <li><Link to="/hookscalculatorcomponent">Hooks Calculator Component</Link></li>
            <li><Link to="/todo">TODO List</Link></li>
            <li><Link to="/crudithlocalstorage">CRUD With Local Storage</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/favcolor" element={<FavColorApp />} />
          <Route path='/signupform' element={<SignupForm />}/>
          <Route path='/loginform' element={<LoginForm />}/>
          <Route path='/changepwd' element={<ChangePwd />}/>
          <Route path='/editprofile' element={<EditProfile />}/>
          <Route path='/showsfrgottenpwd' element={<ShowForgottenPwd />}/>
          <Route path='/hookscalculatorcomponent' element={<HooksCalculatorComponent />}/>
          <Route path='/todo' element={<TodoList />}/>
          <Route path='/crudithlocalstorage' element={<CRUDWithLocalStorage />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;