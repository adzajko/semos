import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlantDetails from '../components/PlantDetails';
import PlantList from '../components/PlantList';

const routes = [
  {
    path: '/',
    component: PlantList,
  },
  {
    path: '/plants/:id',
    component: PlantDetails,
  },
];

const ApplicationRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
