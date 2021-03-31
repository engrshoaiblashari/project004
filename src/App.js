import logo from './logo.svg';
import './App.css';
import Greeting from './Hello';

function App({name, age}) {
  return <div> Hello World from App.JS 
    Name: {name} Age: {age-10}
    <br/>
    <Greeting firstName={name} /> 
    <br />
  </div>
}

export default App;
