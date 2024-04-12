import AddMovie from "./component/AddMovie";
import Cards from "./component/Cards";
import Header from "./component/header";
import { Route, Routes } from 'react-router-dom'
import Details from "./component/Details";
import { createContext, useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";



const AppState=createContext();

function App() {
  const [login,setLogin]=useState(false);
  const [userName,setUserName]=useState(""); 


  return (
    <AppState.Provider  value={{login,userName, setLogin,setUserName}}>
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path='/addmovie' element={<AddMovie />} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
    </AppState.Provider>
  );
}

export default App;
export {AppState};
