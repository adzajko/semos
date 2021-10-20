import NotFound from '../components/NotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/layout/Navbar';
import Login from '../components/Login';
import Register from '../components/Register';
import { useUserContext } from '../context/auth';

const routes = [
  {
    component: Dashboard,
    isPrivate: true,
    path: '/',
  },
  {
    component: Login,
    path: '/login',
    isPrivate: false,
  },
  {
    component: Register,
    path: '/register',
    isPrivate: false,
  },
];

const PrivateRoute = (props) => {
  const { activeUser } = useUserContext();

  if (!activeUser) {
    return <Redirect to={'/login'} />;
  }

  return <Route {...props} />; // <=> <Route path={props.path} component={props.component} />
};

const ApplicationRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map((route, index) =>
          route.isPrivate ? (
            <PrivateRoute
              key={index}
              path={route.path}
              component={route.component}
              exact
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact
            />
          )
        )}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
