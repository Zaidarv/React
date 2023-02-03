import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar';
import Asignartutor from './components/paginas/Asignartutor';
import Asignartutorados from './components/paginas/Asignartutorados';

function App() {


return(
 <div className='App'>
  <Router>
    <Navbar/>
    <Asignartutor/>
  </Router>
  </div>
  )

}

export default App;