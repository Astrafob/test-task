import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Personnel from '../Personnel/Personnel';
import Svg from '../Svg/Svg';

function App() {
  return (
    <div className="page__container">
      <Header />
      <Banner />
      <Info />
      <Personnel />
      <Footer />
      <Svg />
    </div>
  );
}

export default App;
