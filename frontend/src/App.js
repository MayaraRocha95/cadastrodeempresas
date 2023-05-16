import "./App.css";
import ListaEmpresas from "./components/ListaEmpresas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ListaEmpresas />
      <ToastContainer />
    </div>
  );
}

export default App;
