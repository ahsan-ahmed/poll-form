import { useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import VerticalCarousel from './components/verticalcarousel/VerticalCarousel';
import SlideCarousel from './components/slidecarousel/SlideCarousel';
import Stepper from './components/stepper/Stepper';
import { POLL_DATA } from './utils/const';
import OptionButtons from './components/optionbuttons/OptionButtons';

interface State extends SnackbarOrigin {
  open: boolean;
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [pollData, setPollData] = useState(POLL_DATA);
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ ...state, open: !state.open });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div className="App">
      <div className="grid grid-cols-2 h-screen relative">

        {/* Stepper */}
        <Stepper pollData={pollData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} handleSnackbarClick={handleClick} />

        {/* Vertical Carousel */}
        <div style={{ backgroundColor: "#5D3FD3" }} className="text-white flex justify-center items-center text-5xl">
          {currentIndex < 3
            ? <VerticalCarousel pollData={pollData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            : <SlideCarousel pollData={pollData} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} />}
        </div>

        {/* Options View */}
        <OptionButtons pollData={pollData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} currentSlideIndex={currentSlideIndex} setPollData={setPollData} />

      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Please fill the form!"
        key={vertical + horizontal}
      />
    </div>
  );
}

export default App;
