import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ReviewList from './components/ReviewList';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="container">
      <Reviews />
      {/* <ReviewList/> */}

    </div>
  );
}

export default App;
