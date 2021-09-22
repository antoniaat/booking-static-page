import './styles/index.scss';

import { Navigation } from './components/navigation/navigation.components';
import { BookingBar } from './components/booking-bar/booking-bar.component';
import { RoomsSection } from './components/rooms-slider/rooms-section.component';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BookingBar />
      <main>
        <RoomsSection />
      </main>
    </div>
  );
}

export default App;
