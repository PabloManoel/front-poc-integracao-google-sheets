import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Google Spreadsheet Integration Test - deploy 02
        </p>
        <button
          id="sendFeedback"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send Request
        </button>
      </header>
    </div>
  );
}

export default App;
