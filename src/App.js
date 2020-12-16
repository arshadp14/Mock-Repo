
import './components/Header.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div>
        <Header msg="The Apple Store"></Header>
        <br></br>
        <Navigation></Navigation>
        <Footer msg="All rights reserved | copyright @www.apple.com"></Footer>
    </div>
  );
}

export default App;
