import { useState } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import VerticalCarousel from "./components/verticalcarousel/VerticalCarousel";
import SlideCarousel from "./components/slidecarousel/SlideCarousel";
import Stepper from "./components/stepper/Stepper";
import { POLL_DATA } from "./utils/const";
import OptionButtons from "./components/optionbuttons/OptionButtons";
import { POLL_DATA_TYPE } from "./types/poll";

interface State extends SnackbarOrigin {
  open: boolean;
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [pollData, setPollData] = useState(POLL_DATA);
  const [state, setState] = useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ ...state, open: !state.open });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex: number) =>
      prevIndex === pollData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex: number) =>
      prevIndex === 0 ? pollData.length - 1 : prevIndex - 1
    );
  };

  const handleUpdatePoll = (idx: number) => {
    let newPollData: POLL_DATA_TYPE[] = [...pollData];
    newPollData[currentIndex].value = idx;
    setPollData(newPollData);
    setTimeout(() => {
      if (pollData.length > currentIndex) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);
  };

  return (
    <div className="App">
      <div className="grid grid-cols-2 h-screen relative">
        {/* Stepper */}
        <Stepper
          pollData={pollData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          handleSnackbarClick={handleClick}
        />

        {/* Vertical Carousel */}
        <div
          style={{ backgroundColor: "#5D3FD3" }}
          className="text-white flex justify-center items-center text-5xl"
        >
          {currentIndex < 3 ? (
            <VerticalCarousel
              pollData={pollData}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          ) : (
            <SlideCarousel
              pollData={pollData}
              currentSlideIndex={currentSlideIndex}
              handleNext={handleNextSlide}
              handlePrev={handlePrevSlide}
            />
          )}
        </div>

        {/* Options View */}
        <OptionButtons
          pollData={pollData}
          currentIndex={currentIndex}
          currentSlideIndex={currentSlideIndex}
          onUpdatePollData={handleUpdatePoll}
        />
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
