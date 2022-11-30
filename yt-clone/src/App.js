// import './App.css';

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
  );
};

export default App;
