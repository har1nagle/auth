import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Home from "./Components/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
