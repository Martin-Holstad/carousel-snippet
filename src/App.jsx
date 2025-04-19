import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import Modal from "./components/common/Modal/Modal";
import Navigation from "./components/common/Navigation/Navigation";
import Media from "./components/Media/Media";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Modal />
        <Navigation />
        <Media />
      </div>
    </AppContextProvider>
  );
}

export default App;
