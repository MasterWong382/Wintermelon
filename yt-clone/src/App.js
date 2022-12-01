// import './App.css';

import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, IndexRoute } from "react-router-dom";
import Test from "./pages/Test";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />}>
            <IndexRoute indexElement={<Home />} />
            <Route path="Login" element={<Login />} />
          </Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
