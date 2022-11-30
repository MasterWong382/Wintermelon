// import './App.css';

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
      <Login />
    </ThemeProvider>
  );
};

export default App;
