import logo from './logo.svg';
import './App.css';
import { withFfcConsumer } from 'ffc-react-client-sdk';

function App({ flags }) {
  console.log(flags.ReactDemoFlag);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          flags.ReactDemoFlag === 'false' ?
            <div>
              Learn React
            </div>
            :
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        }
      </header>
    </div>
  );
}

// export default App;


export default withFfcConsumer()(App);