import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Offers from "./components/Offers/Offers";
import Footer from "./components/Footer/Footer";
import Specialists from "./components/Specialists/Specialists";

function App() {
    return (
        <>
            <Menu />
            <Header />
            <Specialists />
            <Offers />
            <Footer />
        </>
    );
}

export default App;
