import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./pages/PageLayout";

function App() {
    return (
        <Routes>
            <Route element={<PageLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;
