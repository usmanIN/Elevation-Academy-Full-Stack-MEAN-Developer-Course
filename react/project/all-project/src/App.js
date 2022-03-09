import './App.css';
import {BrowserRouter} from "react-router-dom";
import Parent from "./component/Parent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Parent />
      </BrowserRouter>
    </div>
  );
}

export default App;
