import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Card from './components/ui/Card';

function App() {
  return (
    <Router>
      <Nav />
      <Card />
    </Router>
  );
}

export default App;
