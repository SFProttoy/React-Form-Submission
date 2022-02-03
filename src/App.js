import "./App.css";
import Form from "./components/Form/Form";
import PAndT from "./components/Form/PAndT/PAndT";
import From from "./components/From/From";
import Return from "./components/Return/Return";
import To from "./components/To/To";
import VAndC from "./components/VAndC/VAndC";
import AuthProvider from "./context/Authprovider";
import Departure from "./Departure/Departure";
function App() {
  return (
    <div className="App">
      <h3 className="text-danger mt-3">Flight deals with Virgin Atlantic</h3>

      <AuthProvider>
        <From></From>
        <To></To>
        <Departure></Departure>
        <Return></Return>
        <PAndT></PAndT>
        <VAndC></VAndC>
        <Form></Form>
      </AuthProvider>
    </div>
  );
}

export default App;
