import './styles/index.scss';

import { Navigation } from './components/navigation/navigation.components';
import { BookingBar } from './components/booking-bar/booking-bar.component';
import { RoomsSlider } from './components/rooms-slider/rooms-slider.component';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BookingBar />
      <main>
        <RoomsSlider />
      </main>
    </div>
  );
}

export default App;
