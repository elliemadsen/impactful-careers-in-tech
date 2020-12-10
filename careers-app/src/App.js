import './App.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <div class="main">
      <h1> Empowering Impactful + Sustainable Careers in Technology</h1>

        <Button class="btn btn-lg" href="https://internship-review.herokuapp.com/" variant="success">Tech Internship Reviews</Button>

        <Link to="/Alumni">
          <Button class="btn" variant="success">Brown Alumni in Tech for Good</Button>
        </Link>

      </div>

    </div>
  );
}

export default App;
