import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import styles from './App.less';

function App() {
  return (
    <div className="App">
        <Header className={styles.header} />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
