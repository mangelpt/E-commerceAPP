import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./pages/PageLayout";
import Hats from "./pages/hats/Hats";
import Jackets from "./pages/jackets/Jackets";
import Sneakers from "./pages/sneakers/Sneakers";
import Women from "./pages/women/Womens";
import Mens from "./pages/mens/Mens";

function App() {
    return (
        <Routes>
            <Route element={<PageLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="hats" element={<Hats/>}/>
                <Route path="jackets" element={<Jackets/>}/>
                <Route path="sneakers" element={<Sneakers/>}/>
                <Route path="women" element={<Women/>}/>
                <Route path="mens" element={<Mens/>}/>
            </Route>
        </Routes>
    );
}


export default App;
