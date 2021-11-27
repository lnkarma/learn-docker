import "./App.css";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import UserForm from "./components/UserForm";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
