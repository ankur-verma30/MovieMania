import AddMovie from "./component/AddMovie";
import Cards from "./component/Cards";
import Header from "./component/header";
import {Route, Routes} from 'react-router-dom'
import Details from "./component/Details";




function App() {
  return (
    <div className="App relative">
     <Header/>
     <Routes>
      <Route path="/" element={<Cards/>} />
      <Route path='/addmovie' element={<AddMovie/>} />
      <Route path='/detail/:id' element={<Details/>} />
     </Routes>
    </div>
  );
}

export default App;
