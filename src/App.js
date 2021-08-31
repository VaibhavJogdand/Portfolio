import './App.css';
import Topbar from './components/topbar/topbar';
import Header from './components/header/header';
import Project from './components/projects/project';
import Experties from './components/experties/experties';
import Contact from './components/contact/contact'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Project />
      <Experties />
      <Contact />
    </div>
  );
}

export default App;
