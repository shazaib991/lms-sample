import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import MainSection from "./components/mainSection/MainSection";
import "./app.css";

function App() {
    return (
        <div className="sections-wrapper">
            <Navbar />
            <div className="mid-section-wrapper">
                <Topbar />
                <MainSection />
            </div>
        </div>
    );
}

export default App;
