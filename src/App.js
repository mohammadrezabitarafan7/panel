import logo from './logo.svg';
import './App.css';
import LoginPage from './Page/Login/loginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home/home'
import Menu from './Ui/Menu/menu'
import Section from './Ui/Section/section';
function App() {
  return (
    <div className="App">



      
      
      
      <BrowserRouter>

        <Routes>


          <Route path="/" exact Component={LoginPage}></Route>
          <Route path="/Home" exact Component={Home}></Route>

        </Routes>

      </BrowserRouter> */



    </div>
  );
}

export default App;
