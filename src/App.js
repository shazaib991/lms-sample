import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import MainSection from "./components/mainSection/MainSection";
import "./app.css";
import Rightbar from "./components/rightbar/Rightbar";

function App() {
    return (
        <div>
            <Navbar />
            <Topbar />
            <div className="sections-wrapper">
                <MainSection />
                <Rightbar />
            </div>
        </div>
    );
}

export default App;
