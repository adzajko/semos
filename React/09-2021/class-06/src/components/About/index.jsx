import {
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

const About = () => {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const routeMatch = useRouteMatch();

  const handleNavigation = () => {
    history.push('/');
  };

  return (
    <section>
      <button onClick={handleNavigation}>Navigate to home!</button>
    </section>
  );
};

export default About;
