import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import About from './components/about/About';
import RoutingError from './components/RoutingError';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement:<RoutingError />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
