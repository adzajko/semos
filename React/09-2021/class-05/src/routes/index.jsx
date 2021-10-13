import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/home';

const ROUTES = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
];

const ApplicationRoutes = () => {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, index) => (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={index}
          />
        ))}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRoutes;
