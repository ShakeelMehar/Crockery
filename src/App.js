import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Item from "./components/Item";
// import Deals from "./components/Deals";
import Gallery from "./components/Gallery";
import About from "./components/About";
import FeedBack from "./components/FeedBack";
import Contact from "./components/Contact";
import Address from "./components/Address";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="px-3 main scroll-smooth md:px-6 lg:px-10 xl:px-20 xxl:px-28 bg-slate-900">
            <Navbar title="React App" />
            <Hero />
            {/* <Deals /> */}
            <Item />
            <Gallery />
            <About />
            <FeedBack />
            <Contact />
            <Address />
            <Footer />
        </div>
    );
}

export default App;
