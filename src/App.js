import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className='App-logo'/>;
      <Header />
      <Content />
    </div>
  );
}

export default App;
