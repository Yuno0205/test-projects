import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Story from './components/Story';

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <Banner />
                <Story />
                <Footer />
            </div>
        </div>
    );
}

export default App;
