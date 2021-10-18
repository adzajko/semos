import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import About from '../components/About';
import ItemList from '../components/ItemList';

const ROUTES = [
  {
    path: '/',
    component: ItemList,
  },
  {
    path: '/about',
    component: About,
  },
];

const ApplicationRouter = () => {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
