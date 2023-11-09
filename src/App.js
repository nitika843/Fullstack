
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from "./component/Navbar";
import Home from './component/Home';
import Register from './component/Register';
import Edit from './component/Edit';
import Detail from './component/Detail';
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/edit" Component={Edit}></Route>
        <Route path="/view/:id" Component={Detail}></Route>
      </Routes>

    </>
  );
}
export default App;
