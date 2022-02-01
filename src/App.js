import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./pages/PageLayout";
import Hats from "./pages/hats/Hats";
import Jackets from "./pages/jackets/Jackets";
import Sneakers from "./pages/sneakers/Sneakers";
import Women from "./pages/women/Womens";
import Mens from "./pages/mens/Mens";
import Offers from "./pages/ofers/Offers";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

function App() {
    return (
        <Routes>
            <Route element={<PageLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="hats" element={<Hats/>}/>
                <Route path="hats/:itemId" element={<Details/>}/>
                <Route path="jackets" element={<Jackets/>}/>
                <Route path="/jackets/:itemId" element={<Details/>}/>
                <Route path="sneakers" element={<Sneakers/>}/>
                <Route path="/sneakers/:itemId" element={<Details/>}/>
                <Route path="womens" element={<Women/>}/>
                <Route path="/womens/:itemId" element={<Details/>}/>
                <Route path="mens" element={<Mens/>}/>
                <Route path="/mens/:itemId" element={<Details/>}/>
                <Route path="offers" element={<Offers/>}/>
                <Route path="/offers/:itemId" element={<Details/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    );
}


export default App;
