import { useState } from 'react';

import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';
import { CartDataContextProvider } from './data/cart_context';

function App() {

  return (
    <>
      <CartDataContextProvider>
        <MainHeader />
        <main>
          <Events />
        </main>
      </CartDataContextProvider>
    </>
  );
}

export default App;
