import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Home from "./Components/Home"
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/resetPassword/:token" element={<ResetPassword />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
