import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";


const router = (
    <Router>
        <Routes>
            <Route path="/" element={ <App/> } />
        </Routes>
    </Router>
);

export default router;