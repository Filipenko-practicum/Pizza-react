import './scss/app.scss';
import LogoHeader from "./components/LogoHeader";
import { Home } from "./pages/Home";
import  Cart  from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {
    Routes,
    Route,
} from "react-router-dom";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/filterSlice";

export const AppContext = React.createContext();

function App() {
    const [ searchValue, setSearchValue ] = React.useState('')
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
      <div className="wrapper">
          <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
          >
              Increment
          </button>
          <span>{count}</span>
          <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
          >
              Decrement
          </button>


       <AppContext.Provider value={{ searchValue, setSearchValue }}>
           <LogoHeader />
           <div className="content">
               <Routes>
                   <Route path="/" element={ <Home searchValue={ searchValue }/> }/>
                   <Route path="/cart" element={ <Cart/> }/>
                   <Route path="*" element={ <NotFound/> }/>
                   {/*path со * означает, что если вышеперечисленные пути не найдены, то выдаётся стр с ошибкой!*/}
               </Routes>
           </div>
       </AppContext.Provider>
      </div>
  );
}

export default App;
