import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import GetItemComponent from './components/GetItemComponent';
import StyledComponet from './components/StyledComponet';
import StyledUseStateProps from './components/StyledUseStateProps';
import EmotionComponent from './components/EmotionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>reactテスト中でう。</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestComponent />
        <StyledComponet />
        <GetItemComponent />
        <StyledUseStateProps />
        <EmotionComponent />
      </header>
    </div>
  );
}

export default App;
