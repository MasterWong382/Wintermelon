import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <ThemeProvider
      theme={{
        font: 'Fira Sans',
      }}
    >
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
    </ThemeProvider>
  );
};

export default App;
