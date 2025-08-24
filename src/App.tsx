import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import Modal from "./components/common/Modal/Modal";
import Navigation from "./components/common/Navigation/Navigation";
import Media from "./components/Media/Media";
function App() {
  return (
    <AppContextProvider>
      <Modal />
      <Navigation />
      <Media />
    </AppContextProvider>
  );
}

export default App;
