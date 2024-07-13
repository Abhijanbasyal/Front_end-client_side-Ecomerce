import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import ProtectedRoute from './ProtectedRoute';

const Router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [{

            path: '',
            element: <Home />
        },
        {

            path: 'login',
            element: <Login />
        },
        {

            path: 'signup',
            element: <Signup />
        },
        {
            path: 'profile',
            element: <ProtectedRoute> <Profile /></ProtectedRoute>
        }
        ]
    }
]
);

export default Router