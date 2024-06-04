import { useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { Context } from "./context/Context";
import AllRoutes from './routes/AllRoutes';

function App() {

  const [auth, setAuth] = useState(true);
  const [openChat, setOpenChat] = useState(false);

  return (
      <Context.Provider value={{auth, setAuth, openChat, setOpenChat}}>
        <CartProvider>
          <SkeletonTheme baseColor="#ccc" highlightColor="#444">
            <BrowserRouter>
              <AllRoutes/>
            </BrowserRouter>
          </SkeletonTheme>
        </CartProvider>
      </Context.Provider>
  );
}

export default App;
