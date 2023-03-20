import './notfound.css';

const NotFound: React.FC = () => {
  return (
      <div>
      <Switch>
        // your other routes here
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default NotFound;
