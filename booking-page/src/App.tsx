import './styles/index.scss';

import React from 'react';
import { Navigation } from './components/navigation/navigation.components';
import { BookingBar } from './components/booking-bar/booking-bar.component';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BookingBar />
    </div>
  );
}

export default App;
