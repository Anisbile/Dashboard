import Sidebar from './components/sidebar';
import Reviews from './components/reviews';
import Ratings from './components/rating';
import Analysis from './components/analysis';
import Visitor from './components/visitors';

import './App.css';


function App() {
  return (
    <div>
      <Sidebar />
      <Reviews />
      <Ratings />
      <Analysis />
      <Visitor />
    </div>
  );
}

export default App;
