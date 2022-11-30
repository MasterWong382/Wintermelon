// import './App.css';

<<<<<<< Updated upstream
import { ThemeProvider } from 'styled-components';
import SidebarWrapper from './layouts/sidebar';
import Sidebar from './layouts/sidebar';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <ThemeProvider
      theme={{
        font: 'Fira Sans',
      }}
    >
      {/* <Login /> */}
    <Sidebar />
    </ThemeProvider>
=======
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
        <Route element={<Home />}>
          <Route path="/" element={<Test />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
};

export default App;
