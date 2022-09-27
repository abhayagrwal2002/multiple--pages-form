import "./App.css";
import Form from "./components/Form";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 
import Info from "./components/Info";

function App() {
  return (
      <div className="App">
      <Router>        
        <Routes>
        <Route exact path="/" element={<Form />}/>
        <Route exact path="/succcessful" element={<Info />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
