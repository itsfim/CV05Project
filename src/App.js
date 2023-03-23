import "./App.css";
import Homepage from './components/Home/homepage.js';
import NotFound from "./components/Errors/notfound.js";
import Navbar from "./components/Navbar/handleNavbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GameHouse from "./components/Game/gameHouse";
import Report from './components/Report/Report.js';
import Account from './components/Account/Account.js'
import Timer from "./components/Timer/Timer.js";


function App() {
  const Time = <Timer/>;
  return (
    
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <div>
         <Navbar startTime={Time}/>
         <Routes>
         <Route path='/' exact={true} element={<Homepage/>}/>
         <Route path="homepage" element={<Homepage/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route path="game" element={<GameHouse/>}/>
         <Route path="login" element={<Account/>}/>
         <Route path="report" element={<Report/>}/>
         </Routes>
       </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;