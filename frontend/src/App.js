import "./App.css";
import ListaEmpresas from "./pages/ListaEmpresas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ListaEmpresas />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
