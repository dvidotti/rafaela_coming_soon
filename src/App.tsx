import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "screens/MainRoutes";

function App() {
    return (
        <div className="App">
            <Router>
                <MainRoutes />
            </Router>
        </div>
    );
}

export default App;
