import './notfound.css';

const NotFound: React.FC = () => {
  return (
    <div>
    <Switch>
      <Route component={NotFound} />
    </Switch>
  </div>
  );
};

export default NotFound;
